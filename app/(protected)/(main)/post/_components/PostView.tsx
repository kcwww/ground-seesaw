import { Eye } from 'lucide-react';

const PostView = () => {
  return (
    <div className="w-full flex justify-between items-center text-gray-400 dark:text-gray-600">
      <p className="pt-1">2021-08-25</p>
      <div className="flex gap-2">
        <Eye />
        <p className="pt-1">0</p>
      </div>
    </div>
  );
};

export default PostView;
