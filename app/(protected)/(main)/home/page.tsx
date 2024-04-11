import SIDEBAR from '@/constants/sidebar';
import { BACKEND_ORIGIN } from '@/constants/url';

const fetchData = async () => {
  try {
    const response = await fetch(`${BACKEND_ORIGIN}/api/recent-posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const HomePage = async () => {
  const data = await fetchData();

  if (!data) {
    return <div className="md:ml-[20rem]">Loading... {BACKEND_ORIGIN}</div>;
  }

  return (
    <section className={'md:ml-[' + SIDEBAR.SIZE + ']'}>
      <h1>Home Page</h1>
      {BACKEND_ORIGIN}
      {JSON.stringify(data)}
    </section>
  );
};

export default HomePage;
