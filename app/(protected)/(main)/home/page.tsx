import { BACKEND_ORIGIN } from '@/constants/url';

const fetchData = async () => {
  const response = await fetch(`${BACKEND_ORIGIN}/api/recent-posts`);
  const data = await response.json();
  return data;
};

const HomePage = async () => {
  const data = await fetchData();
  return (
    <section className="md:ml-[20rem]">
      <h1>Home Page</h1>
      {JSON.stringify(data)}
    </section>
  );
};

export default HomePage;
