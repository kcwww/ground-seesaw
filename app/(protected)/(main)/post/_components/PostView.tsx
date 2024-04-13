'use client';

import { Eye } from 'lucide-react';

const PostView = () => {
  const date = new Date();
  date.setHours(date.getHours() + 9);
  const koreaDate = date.toISOString().slice(0, 10);

  return (
    <div className="w-full flex justify-between items-center text-gray-400 dark:text-gray-600">
      <div className="pt-1">{koreaDate}</div>
      <div className="flex gap-2">
        <Eye />
        <div className="pt-1">0</div>
      </div>
    </div>
  );
};

export default PostView;
