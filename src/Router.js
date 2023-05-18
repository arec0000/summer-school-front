import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RegAuthPage, Auth, Reg } from './RegAuth';
import { ProfilePage } from './Profile';

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
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
]);

export const Router = () => <RouterProvider router={router} />;
