'use client';

import { useRecoilValue } from 'recoil';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { dateState } from '@/lib/Recoil/atoms/dateAtom';
import { useLocation } from '@/lib/hooks/useLocation';
import { useModal } from '@/lib/hooks/useModal';
import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';

export type MapStateType = {
  latitude: number;
  longitude: number;
  place_name: string;
  loading: boolean;
  address_name: string;
  place_url: string;
};

const EventModal = () => {
  const { onClose, isOpen, type } = useModal();
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState('');
  const date = useRecoilValue(dateState);
  const { mapDetail } = useLocation();
  const router = useRouter();

  if (type !== 'Event') return null;

  const postDate = async () => {
    setIsUploading(true);

    const newDate = new Date(
      date.year!,
      date.month! - 1,
      date.day!,
      date.hour!,
      date.minute!
    );
    newDate.setHours(newDate.getHours() + 9);
    const koreaDate = newDate.toISOString().slice(0, 19).replace('T', ' ');

    const eventData = {
      title,
      date: koreaDate,
      latitude: mapDetail.latitude,
      longitude: mapDetail.longitude,
      place_name: mapDetail.place_name,
      address_name: mapDetail.address_name,
      place_url: mapDetail.place_url,
    };
    try {
      const res = await clientComponentFetch(BACKEND_ROUTES.EVENT, {
        method: 'POST',
        body: JSON.stringify(eventData),
      });
      toast.success('일정이 등록되었습니다.');
      router.push('/home');
    } catch (e) {
      console.log(e);
      toast.error('일정 등록에 실패했습니다.');
      router.push('/home');
    } finally {
      router.refresh();
    }

    setIsUploading(false);
  };

  if (Object.values(date).some((value) => value === null)) return null;

  return (
    <AlertDialog open={isOpen && type === 'Event'}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>일정 등록 확인 !</AlertDialogTitle>
          <div>
            <div className="p-2">
              <div>{mapDetail.address_name}</div>
              <div>{mapDetail.place_name} </div>
              <a
                className="text-emerald-500"
                href={mapDetail.place_url}
                target="_blank"
              >
                {mapDetail.place_url}
              </a>
              <div>
                {date.year} 년 {date.month} 월 {date.day} 일 -{' '}
                {date.hour! < 12 ? '오전' : '오후'} {date.hour} 시 {date.minute}{' '}
                분
              </div>
            </div>

            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="일정 제목을 입력해주세요."
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isUploading}
            onClick={() => {
              onClose();
            }}
          >
            닫기
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isUploading || !title}
            onClick={async () => {
              await postDate();
              onClose();
            }}
          >
            등록
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EventModal;
