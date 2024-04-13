'use client';

import { useRecoilValue } from 'recoil';

import { postFormState } from '@/lib/Recoil/atoms/postFormAtom';

const PostDescription = () => {
  const { description } = useRecoilValue(postFormState);

  return (
    <div className="break-words w-full flex justify-start items-start">
      {description === '' ? '입력한 내용이 들어갑니다.' : description}
    </div>
  );
};

export default PostDescription;
