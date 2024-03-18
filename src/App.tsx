import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, ErrorComponent, createRouter } from '@tanstack/react-router';
import { HelmetProvider } from 'react-helmet-async';

import { routeTree } from './routeTree.gen';

const queryClient = new QueryClient();

const router = createRouter({
  context: {
    queryClient,
  },
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  defaultPendingComponent: () => (
    <div>
      <p>Loading...</p>
    </div>
  ),
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { queryClient };
export default App;
