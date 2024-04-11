import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  router.replace('/home'); // Redirect to home page logged in after

  return <main>Login</main>;
};

export default Login;
