import { BACKEND_ORIGIN } from '@/constants/url';
import { BACKEND_ROUTES } from '@/constants/routes';
import serverComponentFetch from '@/lib/fetch/serverFetch';

const fetchData = async () => {
  try {
    const response = await serverComponentFetch(BACKEND_ROUTES.RECENT_POSTS);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const HomePage = async () => {
  const data = await fetchData();

  if (!data) {
    return <div className="md:ml-[16rem]">Loading... {BACKEND_ORIGIN}</div>;
  }

  return (
    <div className="md:ml-[16rem]">
      <h1>Home Page</h1>
      {BACKEND_ORIGIN}
      {JSON.stringify(data)}
    </div>
  );
};

export default HomePage;
