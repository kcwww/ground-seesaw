import { KAKAO_API } from '@/constants/routes';

const getRegion = async (x: number, y: number) => {
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  console.log(REST_API_KEY, x, y);

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

    return response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};

export { getRegion };
