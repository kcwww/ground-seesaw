import serverComponentFetch from '@/lib/fetch/serverFetch';
import { BACKEND_ROUTES } from '@/constants/routes';
import PostCard from '@/components/post/PostCard';

import FetchingPostData from './FetchingPostData';

const Notifications = () => {
  return (
    <div className="w-full">
      <PostCard title="공지글">
        <FetchingPostData type="notifications" />
      </PostCard>
    </div>
  );
};

export default Notifications;
