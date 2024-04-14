'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Heart, MessageCircle } from 'lucide-react';

import { fetchPostData } from '@/lib/fetch/fetchPostData';
import type { PostType } from '@/lib/types/postType';
import { Skeleton } from '@/components/ui/skeleton';

type fetchPostType = PostType & {
  id: string;
  title: string;
  category: string;
};

const FetchingPostData = ({ type }: { type: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [type],
    queryFn: () => fetchPostData(type),
  });

  if (isLoading)
    return (
      <>
        <div className="space-y-2">
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
        </div>
      </>
    );
  if (error)
    return <div>데이터를 불러오는데 실패하였습니다. : {error.message}</div>;

  return (
    <div>
      {data.map((post: fetchPostType) => (
        <div key={post.id}>
          <Link href={`/${post.id}`}>
            <div className="w-full flex justify-between items-center">
              <p className="hover:underline font-light overflow:hidden">
                {post.title}
              </p>
              <div className="flex gap-2">
                <Heart size={20} />{' '}
                {post.comments === null ? 0 : post.comments.length}
                <MessageCircle size={20} /> {post.likes}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FetchingPostData;
