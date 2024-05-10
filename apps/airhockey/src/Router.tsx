import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {JoinPage, PlayPage} from './pages'

const router = createBrowserRouter([
  {
    index: true,
    path: '/',
    element: <JoinPage />
  }, {
    path: '/play',
    element: <PlayPage />
  }
])

export default () => (
  <RouterProvider router={router} />
)
