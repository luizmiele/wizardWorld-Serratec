import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './utils/router/index.jsx';
import { RouterProvider } from "react-router-dom";
import FavoritesProvider from './contexts/FavoriteScreen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </FavoritesProvider>
  </React.StrictMode>
);