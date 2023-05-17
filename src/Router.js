import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RegAuthPage, Auth, Reg } from './RegAuth';

const router = createBrowserRouter([
  {
    path: '/reg-auth',
    element: <RegAuthPage />,
    children: [
      {
        path: 'auth',
        element: <Auth />
      },
      {
        path: 'reg',
        element: <Reg />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
