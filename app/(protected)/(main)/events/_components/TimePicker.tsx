'use client';

import { useSetRecoilState } from 'recoil';

import { dateState } from '@/lib/Recoil/atoms/dateAtom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TimePicker = () => {
  const setDateState = useSetRecoilState(dateState);

  return (
    <div className="flex gap-4">
      <Select
        onValueChange={(value) => {
          setDateState((prev) => ({
            ...prev,
            hour: Number(value),
          }));
        }}
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="시" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>시간</SelectLabel>
            {Array.from({ length: 24 }).map((_, index) => (
              <SelectItem key={index} value={String(index)}>
                {index}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => {
          setDateState((prev) => ({
            ...prev,
            minute: Number(value),
          }));
        }}
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="분" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>분</SelectLabel>

            <SelectItem value={'0'}>0</SelectItem>
            <SelectItem value={'15'}>15</SelectItem>
            <SelectItem value={'30'}>30</SelectItem>
            <SelectItem value={'45'}>45</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimePicker;
