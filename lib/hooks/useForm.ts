import { useRecoilState } from 'recoil';

import {
  PostFormStateType,
  postFormState,
} from '@/lib/Recoil/atoms/postFormAtom';

const usePostForm = () => {
  const [postForm, setPostForm] =
    useRecoilState<PostFormStateType>(postFormState);

  const updatePostForm = (
    key: keyof PostFormStateType,
    value: string | string[]
  ) => {
    setPostForm((prev) => ({ ...prev, [key]: value }));
  };

  return { postForm, updatePostForm };
};

export default usePostForm;
