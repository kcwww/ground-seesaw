import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';
import type { PostType } from '@/lib/types/postType';

import serverComponentFetch from './serverFetch';

const fetchPostData = async (postId: string, type: string) => {
  try {
    if (type === 'notifications') {
      const res = await serverComponentFetch(
        BACKEND_ROUTES.POST_DETAIL(postId) + '?type=' + type
      );
      return res.data as PostType;
    }
    const res = await clientComponentFetch(
      BACKEND_ROUTES.POST_DETAIL(postId) + '?type=' + type
    );

    return res.data as PostType;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { fetchPostData };
