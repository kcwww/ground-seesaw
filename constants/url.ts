const FRONTEND_ORIGIN =
  (process.env.NODE_ENV === 'production' &&
    'https://ground-seesaw.vercel.app') ||
  (process.env.NODE_ENV === 'development' && 'http://localhost:3000') ||
  '';

const BACKEND_ORIGIN =
  (process.env.NODE_ENV === 'production' &&
    'https://ground-seesaw.vercel.app') ||
  (process.env.NODE_ENV === 'development' && 'http://localhost:3000') ||
  '';

export { BACKEND_ORIGIN, FRONTEND_ORIGIN };
