import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from "./router";
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="Loading">
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
