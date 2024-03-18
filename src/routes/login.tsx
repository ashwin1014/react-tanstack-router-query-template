import { createFileRoute } from '@tanstack/react-router';

const Login = () => {
  return <div>Login</div>;
};

const Route = createFileRoute('/login')({
  component: Login,
});

export { Route };
export default Login;
