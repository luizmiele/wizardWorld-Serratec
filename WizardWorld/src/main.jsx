import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { router } from './utils/router/index.jsx';
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);