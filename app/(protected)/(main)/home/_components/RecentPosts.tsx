import PostCard from '@/components/post/PostCard';
import { POST_VIEW } from '@/constants/PostView';

import FetchingPostData from '@/app/(protected)/(main)/home/_components/FetchingPostData';

const RecentPosts = () => {
  return (
    <div className="w-full">
      <PostCard title={POST_VIEW.RECENT}>
        <FetchingPostData type="recent-posts" />
      </PostCard>
    </div>
  );
};
export default RecentPosts;
