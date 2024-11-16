import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard.jsx'));
const NotFound=React.lazy(()=>import( '../components/Erorr/NotFound.jsx'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
