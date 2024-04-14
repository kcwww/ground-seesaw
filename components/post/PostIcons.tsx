'use client';

import { Heart, MessageCircle } from 'lucide-react';

const PostIcons = ({
  likes,
  comments,
}: {
  likes: number;
  comments: string[] | null;
}) => {
  return (
    <div className="flex w-full justify-start items-center gap-4">
      <div className="flex gap-2 justify-center items-center">
        <Heart size={20} /> <p className="pt-1">{likes}</p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <MessageCircle size={20} />{' '}
        <p className="pt-1">{comments === null ? 0 : comments.length}</p>
      </div>
    </div>
  );
};

export default PostIcons;
