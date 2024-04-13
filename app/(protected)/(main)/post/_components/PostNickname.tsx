'use client';

import { useRecoilValue } from 'recoil';

import { postFormState } from '@/lib/Recoil/atoms/postFormAtom';

const PostNickname = () => {
  const { author } = useRecoilValue(postFormState);

  return (
    <div className="w-full">
      <h2>{author === '' ? '당신의 닉네임' : author}</h2>
    </div>
  );
};

export default PostNickname;
