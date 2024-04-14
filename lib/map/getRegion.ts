import { KAKAO_API } from '@/constants/routes';

const getRegion = async (x: number, y: number) => {
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

  try {
    const response = await fetch(KAKAO_API.REST_REGION_API(x, y), {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

const searchRegion = async (query: string) => {
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

  try {
    const response = await fetch(KAKAO_API.REST_QUERY_API(query), {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${REST_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export { getRegion, searchRegion };
