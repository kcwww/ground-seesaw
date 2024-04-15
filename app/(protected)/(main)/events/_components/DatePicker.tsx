'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useSetRecoilState } from 'recoil';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { dateState } from '@/lib/Recoil/atoms/dateAtom';

const DatePicker = () => {
  const [date, setDate] = useState<Date>();
  const setDateState = useSetRecoilState(dateState);

  useEffect(() => {
    const year = date ? date.getFullYear() : null;
    const month = date ? date.getMonth() + 1 : null;
    const day = date ? date.getDate() : null;
    setDateState((prev) => ({
      ...prev,
      year,
      month,
      day,
    }));
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
