// src/App.js
import React, { Suspense, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import Loaders from "./components/Loaders/Loaders";
import routes from "./providers/routes";
import { Provider } from "react-redux";
import store from "./store/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:8080");
function App() {
  // const utcDate = new Date(utcDateString);
  useEffect(() => {
    socket.on("todoNotification", (data) => {
      console.log("Notification received:", data);
      if (data.todos) {
        const todoTime = new Date(data.todos[0].time);
        const now = new Date();
        const timeDifference = todoTime - now;
        const minutesToDue = Math.floor(timeDifference / 1000 / 60);
        console.log(data.todos[0].time, "p");
        if (minutesToDue <= 10 && minutesToDue > 0) {
          toast(
            `Your task "${data.todos[0].title}" is due in ${minutesToDue} minutes!`
          );
        }
      }
    });

    return () => {
      socket.off("todoNotification");
    };
  }, []);
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
