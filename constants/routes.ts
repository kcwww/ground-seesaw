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
  API: (x: string) => `/api/${x}`,
  THREADS: `/api/threads`,
  CONTACT: '/api/contact',
  POSTS: '/api/posts',
  EVENT: '/api/event',
  COMMENT: '/api/comment',
  POST_DETAIL: (id: string) => `/api/post/${id}`,
  POST: '/api/post',
  NOTIFICATIONS: '/api/notifications',
} as const;

const APP_KEY = process.env.KAKAO_JAVASCRIPT_KEY;

const KAKAO_API = {
  MAP: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&libraries=services,clusterer,drawing&autoload=false`,
  REST_REGION_API: (x: number, y: number) =>
    `//dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}&input_coord=WGS84`,
  REST_QUERY_API: (query: string) =>
    `//dapi.kakao.com/v2/local/search/keyword.json?query=${query}`,
} as const;

export { BACKEND_ROUTES, ROUTES, KAKAO_API };
