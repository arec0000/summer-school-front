import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Course } from './Course/Course';
import { RegAuthPage, Auth, Reg } from './RegAuth';
import { ProfilePage, CourseList, Feedback, Goals, Calendar } from './Profile';
import { Main } from './Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/course/:slug',
    element: <Course />
  },
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
      },
      {
        path: 'calendar',
        element: <Calendar />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
