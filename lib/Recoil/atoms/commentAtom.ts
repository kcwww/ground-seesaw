import { atom } from 'recoil';

import type { PostCommentsType } from '@/components/post/PostComments';

export type CommentStateType = {
  upload: boolean;
  comments: PostCommentsType[];
};

export const commentState = atom<CommentStateType>({
  key: 'commentState',
  default: {
    upload: false,
    comments: [],
  },
});
