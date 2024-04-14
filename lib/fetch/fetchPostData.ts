import serverComponentFetch from '@/lib/fetch/serverFetch';
import { BACKEND_ROUTES } from '@/constants/routes';

const fetchPostData = async (postId: string, type: string) => {
  try {
    const res = await serverComponentFetch(
      BACKEND_ROUTES.POST_DETAIL(postId) + '?type=' + type
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { fetchPostData };
