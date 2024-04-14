'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { fetchPostsData } from '@/lib/fetch/fetchPostsData';
import { PostType } from '@/lib/types/postType';

import ThreadCard from '@/app/(protected)/(main)/threads/_components/ThreadCard';

type ThreadsType = PostType & {
  id: string;
};

const Threads = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['threads'],
    queryFn: () => fetchPostsData('threads'),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load threads: {error.message}</div>;

  return (
    <div className="w-full flex flex-col gap-4">
      {data.map((thread: ThreadsType, index: number) => {
        return (
          <ThreadCard
            key={index}
            id={thread.id}
            nickname={thread.author}
            description={thread.description}
            image={thread.images ? thread.images[0] : null}
            date={thread.date}
            likes={thread.likes}
            comments={thread.comments ? thread.comments.length : 0}
          />
        );
      })}
    </div>
  );
};

export default Threads;
