import { fetchPostData } from '@/lib/fetch/fetchPostData';

type NotifyDetailPageProps = {
  params: {
    notifyId: string;
  };
};

const NotifyDetailPage = async ({
  params: { notifyId },
}: NotifyDetailPageProps) => {
  const data = await fetchPostData(notifyId, 'notifications');

  return <>{JSON.stringify(data)}</>;
};

export default NotifyDetailPage;
