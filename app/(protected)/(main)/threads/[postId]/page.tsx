'use client';

import { useQuery } from '@tanstack/react-query';

import * as POST from '@/components/post';
import { fetchPostData } from '@/lib/fetch/fetchPostData';
import type { PostType } from '@/lib/types/postType';

import DeleteButton from '@/app/(protected)/(main)/threads/[postId]/_components/DeleteButton';

type ThreadDetailPageProps = {
  params: {
    postId: string;
  };
};

const ThreadDetailPage = ({ params: { postId } }: ThreadDetailPageProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPostData(postId, 'posts'),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return <div>데이터를 불러오는데 실패하였습니다. : {error.message}</div>;

  const { author, images, date, description, likes, comments, password } =
    data as PostType;

  return (
    <div className="w-full md:pl-64">
      <div className="w-full flex flex-col p-16 justify-center items-center gap-10">
        <div className="flex justify-between items-center w-full">
          <POST.PostNickname nickname={author} />
          <DeleteButton postId={postId} password={password} />
        </div>
        <POST.PostImages images={images} />
        <POST.PostView date={date} />
        <POST.PostDescription description={description} />
        <POST.PostIcons likes={likes} comments={comments} />
        <POST.PostComments postId={postId} />
        <POST.CommentInput postId={postId} />
      </div>
    </div>
  );
};

export default ThreadDetailPage;
