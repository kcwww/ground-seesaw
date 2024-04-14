'use client';

import { Heart, MessageCircle } from 'lucide-react';
import { useRecoilValue } from 'recoil';

import { commentState } from '@/lib/Recoil/atoms/commentAtom';

const PostIcons = ({
  likes,
  comments,
}: {
  likes: number;
  comments: string[] | null;
}) => {
  const commentData = useRecoilValue(commentState);
  return (
    <div className="flex w-full justify-start items-center gap-4">
      <div className="flex gap-2 justify-center items-center">
        <Heart size={20} /> <p className="pt-1">{likes}</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <MessageCircle size={20} />{' '}
        <p className="pt-1">
          {commentData.comments === null ? 0 : commentData.comments.length}
        </p>
      </div>
    </div>
  );
};

export default PostIcons;
