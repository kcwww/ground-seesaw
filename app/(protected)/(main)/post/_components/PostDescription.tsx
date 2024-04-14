'use client';

import { useRecoilValue } from 'recoil';

import { postFormState } from '@/lib/Recoil/atoms/postFormAtom';

const PostDescription = () => {
  const { description } = useRecoilValue(postFormState);
  // description with newline

  return (
    <div className="w-full break-words flex flex-col justify-start items-start gap-2">
      {description === '' && '입력한 내용이 들어갑니다.'}
      {description.split('\n').map((line, index) => (
        <div key={index} className="w-full">
          {line}
          <br />
        </div>
      ))}
    </div>
  );
};

export default PostDescription;
