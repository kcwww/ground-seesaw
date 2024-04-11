'use client';

import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  router.replace('/home'); // 로그인 구현 후 삭제

  return <main>Login</main>;
};

export default Login;
