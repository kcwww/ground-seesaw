const ROUTES = {
  /* landing layout */
  ROOT: '/',
  HOME: '/home',
  THREADS: '/threads',
  EVENTS: '/events',
  CONTACT: '/contact',
  POST: '/post',
} as const;

const BACKEND_ROUTES = {
  THREAD: '/api/threads',
  CONTACT: '/api/contact',
  RECENT_POSTS: '/api/recent-posts',
} as const;

const APP_KEY = process.env.KAKAO_JAVASCRIPT_KEY;

const KAKAO_API = {
  MAP: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&libraries=services,clusterer,drawing&autoload=false`,
  REST_REGION_API: (x: number, y: number) =>
    `//dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
} as const;

export { BACKEND_ROUTES, ROUTES, KAKAO_API };
