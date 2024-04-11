import { BACKEND_ORIGIN } from '@/constants/url';

const fetchData = async () => {
  try {
    const response = await fetch(`${BACKEND_ORIGIN}/api/recent-posts`);
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
    return <div className="md:ml-[20rem]">Loading...</div>;
  }

  return (
    <section className="md:ml-[20rem]">
      <h1>Home Page</h1>
      {BACKEND_ORIGIN}
      {JSON.stringify(data)}
    </section>
  );
};

export default HomePage;
