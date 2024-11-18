// src/App.js
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Loaders from "./components/Loaders/Loaders";
import routes from "./providers/routes";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Suspense fallback={<Loaders />}>
        <RouterProvider router={routes} future={{ v7_startTransition: true }} />
      </Suspense>
    </Provider>
  );
}

export default App;
