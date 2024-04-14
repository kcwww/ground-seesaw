'use client';

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { commentType } from '@/lib/types/commentType';
import { useModal } from '@/lib/hooks/useModal';

interface CommentProps extends commentType {
  id: string;
  password: string;
}

const Comment = ({
  nickname,
  content,
  createAt,
  id,
  password,
}: CommentProps) => {
  const { onOpen } = useModal();

  return (
    <Alert className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <AlertTitle className="text-xl">{nickname}</AlertTitle>
        <Button
          className="p-0 "
          variant="link"
          onClick={() => {
            onOpen('Delete', { data: { id, password } });
          }}
        >
          삭제
        </Button>
      </div>
      <AlertDescription className="text-md flex flex-col">
        {content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </AlertDescription>
      <p className="text-gray-400 dark:text-gray-700 text-sm">{createAt}</p>
    </Alert>
  );
};

export default Comment;
