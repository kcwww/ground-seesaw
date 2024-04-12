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

const fetchPostData = async () => {
  const data = {
    Images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    descriptions: 'This is a post description',
    author: 'John Doe',
    password: 'password',
    location: 'New York',
    date: '2022-01-01',
    // 조회수 영어로
    views: 0,
    likes: 0,
    comments: null,
  };

  try {
    const response = await fetch(`${BACKEND_ORIGIN}/api/recent-posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const rdata = await response.json();
    return rdata;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const HomePage = async () => {
  const data = await fetchData();

  const postResult = await fetchPostData();
  console.log(postResult);

  if (!data) {
    return <div className="md:ml-[16rem]">Loading... {BACKEND_ORIGIN}</div>;
  }

  return (
    <section className="md:ml-[16rem]">
      <h1>Home Page</h1>
      {BACKEND_ORIGIN}
      {JSON.stringify(data)}
      {JSON.stringify(postResult)}
    </section>
  );
};

export default HomePage;
