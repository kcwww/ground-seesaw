import PostCard from '@/components/post/PostCard';
import { POST_VIEW } from '@/constants/PostView';

import FetchingPostData from '@/app/(protected)/(main)/home/_components/FetchingPostData';

const Notifications = () => {
  return (
    <div className="w-full">
      <PostCard title={POST_VIEW.NOTIFICATION}>
        <FetchingPostData type="notifications" />
      </PostCard>
    </div>
  );
};

export default Notifications;
