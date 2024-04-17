'use client';

import { useState, useEffect } from 'react';

import { fetchPostsData } from '@/lib/fetch/fetchPostsData';
import { PostType } from '@/lib/types/postType';

import ThreadCard from '@/app/(protected)/(main)/threads/_components/ThreadCard';
import PageButton from '@/app/(protected)/(main)/threads/_components/PageButton';

export type ThreadsType = PostType & {
  id: string;
};

const Threads = () => {
  const [threads, setThreads] = useState<ThreadsType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPostsData('threads').then((res: ThreadsType[]) => {
      setThreads(res);
    });
  }, []);

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
        <PageButton
          totalNum={Math.ceil(threads.length / 10)}
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
