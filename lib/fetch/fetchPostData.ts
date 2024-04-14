import clientComponentFetch from '@/lib/fetch/clientFetch';
import { BACKEND_ROUTES } from '@/constants/routes';

const fetchPostData = async (type: string) => {
  try {
    const res = await clientComponentFetch(BACKEND_ROUTES.API(type));

    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { fetchPostData };
