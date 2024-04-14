import PostCard from '@/components/post/PostCard';
import { POST_VIEW } from '@/constants/PostView';

import FetchingPostData from '@/app/(protected)/(main)/home/_components/FetchingPostsData';

const PopularPosts = () => {
  return (
    <div className="w-full">
      <PostCard title={POST_VIEW.POPULAR}>
        <FetchingPostData type="popular" />
      </PostCard>
    </div>
  );
};

export default PopularPosts;
