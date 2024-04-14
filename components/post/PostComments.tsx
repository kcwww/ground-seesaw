'use client';

import { useQuery } from '@tanstack/react-query';

import Comment from '@/components/post/Comment';
import { Skeleton } from '@/components/ui/skeleton';
import { BACKEND_ROUTES } from '@/constants/routes';
import { PostType } from '@/lib/types/postType';
import clientComponentFetch from '@/lib/fetch/clientFetch';

const fetchCommentsData = async (postId: string) => {
  try {
    const res = await clientComponentFetch(BACKEND_ROUTES.POST_DETAIL(postId));
    return res;
  } catch (error) {
    console.error(error);
  }
};

const PostComments = ({ postId }: { postId: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['comments'],
    queryFn: () => fetchCommentsData(postId),
  });

  if (isLoading)
    return (
      <div className="space-y-2">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    );
  if (error) return <div>Failed to load comments</div>;

  const { comments } = data.data as PostType;
  if (!comments) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      {comments.map((comment: string, index: number) => (
        <Comment key={index} commentId={comment} />
      ))}
    </div>
  );
};

export default PostComments;
