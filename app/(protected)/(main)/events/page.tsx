import KakaoMap from '@/components/map/KakaoMap';

import SearchLocation from '@/app/(protected)/(main)/events/_components/SearchLocation';
import DatePicker from '@/app/(protected)/(main)/events/_components/DatePicker';
import TimePicker from '@/app/(protected)/(main)/events/_components/TimePicker';
import EventButton from '@/app/(protected)/(main)/events/_components/EventButton';

const EventsPage = () => {
  return (
    <div className="w-full md:pl-64">
      <div className="w-full flex flex-col p-16 justify-center items-center gap-8">
        <SearchLocation />
        <KakaoMap />
        <DatePicker />
        <TimePicker />
        <EventButton />
      </div>
    </div>
  );
};

export default EventsPage;
