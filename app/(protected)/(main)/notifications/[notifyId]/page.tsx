import * as POST from '@/components/post';
import { fetchPostData } from '@/lib/fetch/fetchPostData';
import type { PostType } from '@/lib/types/postType';

type NotifyDetailPageProps = {
  params: {
    notifyId: string;
  };
};

type NotifyPostType = PostType & {
  title: string;
};

const NotifyDetailPage = async ({
  params: { notifyId },
}: NotifyDetailPageProps) => {
  const data = (await fetchPostData(
    notifyId,
    'notifications'
  )) as NotifyPostType;

  return (
    <div className="w-full md:pl-64">
      <div className="w-full flex flex-col p-16 justify-center items-center gap-10">
        <h1 className="text-xl">{data.title}</h1>
        <POST.PostImages images={data.images} />
        <POST.PostView date={data.date} />
        <POST.PostDescription description={data.description} />
        <POST.PostIcons likes={data.likes} comments={data.comments} />
        {data.comments && <POST.PostComments comments={data.comments} />}
        <POST.CommentInput />
      </div>
    </div>
  );
};

export default NotifyDetailPage;
