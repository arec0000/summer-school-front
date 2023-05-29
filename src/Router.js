import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RegAuthPage, Auth, Reg } from './RegAuth';
import { ProfilePage, CourseList, Feedback, Goals } from './Profile';

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
    element: <ProfilePage />,
    children: [
      {
        path: 'course-list',
        element: <CourseList />
      },
      {
        path: 'feedback',
        element: <Feedback />
      },
      {
        path: 'goals',
        element: <Goals />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
