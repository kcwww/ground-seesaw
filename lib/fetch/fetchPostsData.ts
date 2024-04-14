import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';

const fetchPostsData = async (type: string) => {
  try {
    if (type === 'recent' || type === 'popular') {
      const url = BACKEND_ROUTES.POSTS + `?type=${type}`;
      const res = await clientComponentFetch(url);
      return res.data;
    } else if (type === 'threads') {
      const res = await clientComponentFetch(BACKEND_ROUTES.THREADS);
      return res.data;
    } else if (type === 'notifications') {
      const res = await clientComponentFetch(BACKEND_ROUTES.NOTIFICATIONS);
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { fetchPostsData };
