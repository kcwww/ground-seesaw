import { atom } from 'recoil';

export type PostFormStateType = {
  images: null | string[];
  author: string;
  description: string;
  location: null | string;
};

const postFormState = atom<PostFormStateType>({
  key: 'postFormState',
  default: {
    images: null,
    author: '',
    description: '',
    location: null,
  },
});

export { postFormState };
