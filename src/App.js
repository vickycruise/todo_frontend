// src/App.js
import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loaders from './components/Loaders/Loaders'; 
import routes from './providers/routes'; 
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loaders />}>
        <RouterProvider router={routes} />
      </Suspense>
    </Provider>
  );
}

export default App;
