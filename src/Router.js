import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>asdasd</div>
  }
]);

export const Router = () => <RouterProvider router={router} />;
