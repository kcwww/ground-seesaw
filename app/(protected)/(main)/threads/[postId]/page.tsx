import { fetchPostData } from '@/lib/fetch/fetchPostData';

type ThreadDetailPageProps = {
  params: {
    postId: string;
  };
};

const ThreadDetailPage = async ({
  params: { postId },
}: ThreadDetailPageProps) => {
  const data = await fetchPostData(postId, 'posts');

  return <>{JSON.stringify(data)}</>;
};

export default ThreadDetailPage;
