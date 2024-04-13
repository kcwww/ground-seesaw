import { atom } from 'recoil';

export type PostFormStateType = {
  Images: null | string[];
  author: string;
  date: string;
  description: string;
  location: null | string;
};

const postFormState = atom<PostFormStateType>({
  key: 'postFormState',
  default: {
    Images: null,
    author: '',
    date: '',
    description: '',
    location: null,
  },
});

export { postFormState };
