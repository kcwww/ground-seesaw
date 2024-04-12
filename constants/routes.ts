const ROUTES = {
  /* landing layout */
  ROOT: '/',
  HOME: '/home',
  THREADS: '/threads',
  EVENTS: '/events',
  CONTACT: '/contact',
  POST: '/post',
} as const;

const BACKEND_ROUTES = {} as const;

const APP_KEY = process.env.KAKAO_JAVASCRIPT_KEY;
const KAKAO_API = {
  MAP: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&libraries=services,clusterer&autoload=false`,
} as const;

export { BACKEND_ROUTES, ROUTES, KAKAO_API };
