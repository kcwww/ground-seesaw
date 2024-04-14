import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PagenationProps {
  totalNum: number;
  current: number;
  setCurrent: (num: number) => void;
}

const PageButton = ({ totalNum, current, setCurrent }: PagenationProps) => {
  const start = current - 2 > 0 ? current - 2 : 1;
  const end = start + 4 < totalNum ? start + 4 : totalNum;

  const buttons = [];
  for (let i = start; i <= end; i++) {
    buttons.push(
      <Button
        key={i}
        onClick={() => setCurrent(i)}
        variant={'secondary'}
        className={cn(
          i === current &&
            'dark:bg-gray-500 bg-primary text-white hover:bg-primary'
        )}
      >
        {i}
      </Button>
    );
  }

  return <div className="flex gap-2">{buttons}</div>;
};

export default PageButton;
