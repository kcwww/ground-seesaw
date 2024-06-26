'use client';

import { useQuery } from '@tanstack/react-query';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useModal } from '@/lib/hooks/useModal';
import type { PostCommentsType } from '@/components/post/PostComments';

const Comment = ({ comment }: { comment: PostCommentsType }) => {
  const { onOpen } = useModal();

  const { nickname, content, createAt, id, password, postId } = comment;

  return (
    <Alert className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <AlertTitle className="text-xl m-0">{nickname}</AlertTitle>
        <Button
          className="p-0 "
          variant="link"
          onClick={() => {
            onOpen('Delete', {
              data: {
                id: id,
                password: password,
                type: 'comment',
                postId: postId,
              },
            });
          }}
        >
          <X size="15" className="text-gray-400 hover:text-gray-700" />
        </Button>
      </div>
      <AlertDescription className="text-md flex flex-col">
        {content.split('\n').map((line: string, index: number) => (
          <p key={index}>{line}</p>
        ))}
      </AlertDescription>
      <p className="text-gray-400 dark:text-gray-700 text-sm">{createAt}</p>
    </Alert>
  );
};

export default Comment;
