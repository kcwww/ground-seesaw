'use client';

import { Eye } from 'lucide-react';

const PostView = ({ date }: { date: string }) => {
  return (
    <div className="w-full flex justify-between items-center text-gray-400 dark:text-gray-600">
      <div className="pt-1">{date}</div>
      <div className="flex gap-2">
        <Eye />
        <div className="pt-1">0</div>
      </div>
    </div>
  );
};

export default PostView;
