import * as POST from '@/components/post';
import { fetchPostData } from '@/lib/fetch/fetchPostData';
import type { PostType } from '@/lib/types/postType';

import DeleteButton from '@/app/(protected)/(main)/threads/[postId]/_components/DeleteButton';

type ThreadDetailPageProps = {
  params: {
    postId: string;
  };
};

const ThreadDetailPage = async ({
  params: { postId },
}: ThreadDetailPageProps) => {
  const data = (await fetchPostData(postId, 'posts')) as PostType;

  return (
    <div className="w-full md:pl-64">
      <div className="w-full flex flex-col p-16 justify-center items-center gap-10">
        <div className="flex justify-between items-center w-full">
          <POST.PostNickname nickname={data.author} />
          <DeleteButton postId={postId} password={data.password} />
        </div>
        <POST.PostImages images={data.images} />
        <POST.PostView date={data.date} />
        <POST.PostDescription description={data.description} />
        <POST.PostIcons likes={data.likes} comments={data.comments} />
        <POST.PostComments postId={postId} />
        <POST.CommentInput postId={postId} />
      </div>
    </div>
  );
};

export default ThreadDetailPage;
