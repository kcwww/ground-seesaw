import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';

const fetchPostData = async (type: string) => {
  try {
    if (type === 'recent' || type === 'popular') {
      const url = BACKEND_ROUTES.POSTS + `?type=${type}`;
      const res = await clientComponentFetch(url);
      return res.data;
    } else {
      const res = await clientComponentFetch(BACKEND_ROUTES.API(type));
      return res.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { fetchPostData };
