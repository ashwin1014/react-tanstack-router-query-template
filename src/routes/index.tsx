import { createFileRoute } from '@tanstack/react-router';

const Home = () => {
  return <div>Welcome Home!</div>;
};

const Route = createFileRoute('/')({
  component: Home,
});

export { Route };
export default Home;
