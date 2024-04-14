'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchPostsData } from '@/lib/fetch/fetchPostsData';
import { PostType } from '@/lib/types/postType';
import { Skeleton } from '@/components/ui/skeleton';

import ThreadCard from '@/app/(protected)/(main)/threads/_components/ThreadCard';
import Pagenation from '@/app/(protected)/(main)/threads/_components/Pagenation';

export type ThreadsType = PostType & {
  id: string;
};

const Threads = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['threads'],
    queryFn: () => fetchPostsData('threads'),
  });

  const [page, setPage] = useState(1);
  const [threads, setThreads] = useState<ThreadsType[]>([]);

  useEffect(() => {
    if (!data) return;
    const sliceData = data.slice(page - 1, page * 10);
    setThreads(sliceData);
    localStorage.setItem('page', String(page));
  }, [page, data]);

  useEffect(() => {
    if (localStorage.getItem('page')) {
      setPage(Number(localStorage.getItem('page')));
    }
    return () => {
      localStorage.removeItem('page');
    };
  }, []);

  if (isLoading)
    return (
      <div className="min-w-[10rem] max-w-50[rem]">
        <Skeleton className="w-full" />
      </div>
    );
  if (error) return <div>Failed to load threads: {error.message}</div>;

  return (
    <div className="w-full flex flex-col gap-4">
      {threads.map((thread: ThreadsType, index: number) => {
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
      <div className="w-full flex justify-center items-center">
        <Pagenation
          totalNum={Math.ceil(data.length / 10)}
          current={page}
          setCurrent={(num: number) => {
            setPage(num);
          }}
        />
      </div>
    </div>
  );
};

export default Threads;
