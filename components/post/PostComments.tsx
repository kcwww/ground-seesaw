'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import Comment from '@/components/post/Comment';
import { BACKEND_ROUTES } from '@/constants/routes';
import { commentType } from '@/lib/types/commentType';
import clientComponentFetch from '@/lib/fetch/clientFetch';
import { commentState } from '@/lib/Recoil/atoms/commentAtom';

export type PostCommentsType = commentType & {
  id: string;
};

const fetchCommentsData = async (postId: string) => {
  try {
    const res = await clientComponentFetch(
      BACKEND_ROUTES.POST_DETAIL(postId) + '/comments'
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};

const PostComments = ({ postId }: { postId: string }) => {
  const [data, setData] = useRecoilState(commentState);

  useEffect(() => {
    fetchCommentsData(postId).then((res) => {
      setData({ upload: false, comments: res.comments });
    });
  }, []);

  useEffect(() => {
    if (data.upload) {
      fetchCommentsData(postId).then((res) => {
        setData({ upload: false, comments: res.comments });
      });
    }
  }, [data.upload]);

  const comments = data.comments as PostCommentsType[];

  return (
    <div className="w-full flex flex-col gap-4">
      {comments.map((comment: PostCommentsType, index: number) => {
        return <Comment key={index} comment={comment} />;
      })}
    </div>
  );
};

export default PostComments;
