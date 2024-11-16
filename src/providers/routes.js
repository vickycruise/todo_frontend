import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/header/Header.jsx';
// import NotFound from '../components/Erorr/NotFound.jsx';
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard.jsx'));
const NotFound = React.lazy(() => import('../components/Erorr/NotFound.jsx'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: 'app', 
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',  
    element: <NotFound />,
  },
]);

export default routes;
