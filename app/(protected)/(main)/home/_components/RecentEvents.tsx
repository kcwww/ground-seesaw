'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import PostCard from '@/components/post/PostCard';
import { POST_VIEW } from '@/constants/PostView';
import { BACKEND_ROUTES, ROUTES } from '@/constants/routes';
import clientComponentFetch from '@/lib/fetch/clientFetch';
import { Skeleton } from '@/components/ui/skeleton';

type eventType = {
  id: string;
  place_name: string;
  date: string;
  longitude: number;
  latitude: number;
  address_name: string;
  title: string;
};

const fetchEventData = async () => {
  try {
    const res = await clientComponentFetch(BACKEND_ROUTES.EVENT);
    return res;
  } catch (error) {
    console.error(error);

    return error;
  }
};

const RecentEvents = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEventData,
  });

  if (isLoading)
    return (
      <PostCard title={POST_VIEW.EVENT}>
        <div className="space-y-2">
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
        </div>
      </PostCard>
    );
  if (error)
    return (
      <PostCard title={POST_VIEW.EVENT}>
        데이터를 불러오는데 실패하였습니다. : {error.message}
      </PostCard>
    );

  const events = data.data as eventType[];
  const today = new Date();
  today.setUTCHours(today.getUTCHours() + 9);
  const koreaDate = today.toISOString().slice(0, 10);

  return (
    <div className="w-full">
      <PostCard title={POST_VIEW.EVENT}>
        <div className="flex flex-col w-full gap-2">
          {events.map((event: eventType, index: number) => {
            const eventDate = event.date.slice(0, 10);

            if (eventDate < koreaDate) return null;
            const dDay =
              Math.floor(
                (new Date(eventDate).getTime() - today.getTime()) /
                  (1000 * 60 * 60 * 24)
              ) + 1;

            const eventTime = event.date.slice(11, 16).split(':');
            const time = +eventTime[0] > 12 ? '오후' : '오전';
            const eventStr = `${time} ${+eventTime[0] % 12}시 ${eventTime[1]}분`;

            return (
              <div key={event.id}>
                <div>
                  <Link href={ROUTES.EVENTS + `/${event.id}`}>
                    <div className="w-full flex md:justify-between md:items-center flex-col md:flex-row gap-4">
                      <p className="hover:underline font-light overflow:hidden">
                        {event.title.length > 30
                          ? event.title.slice(0, 30) + '...'
                          : event.title}
                      </p>
                      <div className="flex gap-2 md:flex-row flex-col justify-between pb-2">
                        <p>{event.address_name}</p>
                        <p>{event.place_name}</p>
                        <p>{eventDate}</p>
                        <p>{eventStr}</p>
                        <p>{dDay} 일전</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-full h-[1px] bg-gray-200 shadow-lg" />
              </div>
            );
          })}
        </div>
      </PostCard>
    </div>
  );
};
export default RecentEvents;
