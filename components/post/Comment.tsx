'use client';

import { useQuery } from '@tanstack/react-query';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { commentType } from '@/lib/types/commentType';
import { useModal } from '@/lib/hooks/useModal';
import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';
import { Skeleton } from '@/components/ui/skeleton';

const fetchComment = async (commentId: string) => {
  try {
    const res = await clientComponentFetch(
      BACKEND_ROUTES.COMMENT + `/${commentId}`
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

const Comment = ({ commentId }: { commentId: string }) => {
  const { onOpen } = useModal();
  const { data, isLoading, error } = useQuery({
    queryKey: ['comment'],
    queryFn: () => fetchComment(commentId),
  });

  if (isLoading)
    return (
      <div className="space-y-2">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    );

  if (error) return <div>댓글을 불러오는데 실패했습니다.</div>;

  const { nickname, content, createAt, password, postId } =
    data.data as commentType;

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
                id: commentId,
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
