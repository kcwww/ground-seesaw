'use client';

import { useRecoilState } from 'recoil';

import { dateState } from '@/lib/Recoil/atoms/dateAtom';
import { Button } from '@/components/ui/button';
import { useModal } from '@/lib/hooks/useModal';

const EventButton = () => {
  const [date, setDateState] = useRecoilState(dateState);
  const { onOpen } = useModal();

  const isDisabled = Object.values(date).some((value) => value === null);

  return (
    <>
      <Button
        disabled={isDisabled}
        onClick={() => {
          onOpen('Event');
        }}
        className="w-[280px]"
      >
        일정 등록
      </Button>
    </>
  );
};

export default EventButton;
