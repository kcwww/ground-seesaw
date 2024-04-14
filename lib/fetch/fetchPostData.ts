import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';
import type { PostType } from '@/lib/types/postType';

const fetchPostData = async (postId: string, type: string) => {
  try {
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
