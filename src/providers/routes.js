// src/providers/route.js
import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loaders from '../components/Loaders/Loaders.jsx';

const App = React.lazy(() => import('../App.js'));
const NotFound = React.lazy(() => import('../components/Erorr/Error.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <NotFound />,
  },

]);

const SuspendedRouter = () => (
  <Suspense fallback={<Loaders/>}>
    <RouterProvider router={router} />
  </Suspense>
);

export default SuspendedRouter;
