import { atom } from 'recoil';

import type { PostType } from '@/lib/types/postType';

const postFormState = atom<PostType>({
  key: 'postFormState',
  default: {
    Images: null,
    author: '',
    date: '',
    description: '',
    location: null,
    password: '',
    views: 0,
    likes: 0,
    comments: null,
  },
});

export { postFormState };
