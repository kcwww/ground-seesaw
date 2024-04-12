import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import PostDescription from '@/app/(protected)/(main)/post/_components/PostDescription';
import PostImgs from '@/app/(protected)/(main)/post/_components/PostImgs';
import PostNickname from '@/app/(protected)/(main)/post/_components/PostNickname';
import PostView from '@/app/(protected)/(main)/post/_components/PostView';
import PostIcons from '@/app/(protected)/(main)/post/_components/PostIcons';

const PostExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center p-4">
      <PostNickname />
      <PostImgs />
      <PostView />
      <PostDescription />
      <PostIcons />
      <div className="flex w-full gap-2">
        <Textarea placeholder="댓글을 입력해주세요" disabled={true} />
        <Button className="h-[5rem] flex justify-center items-center">
          댓글 달기
        </Button>
      </div>
    </div>
  );
};

export default PostExample;
