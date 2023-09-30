import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

import Home from './components/Home';
import Team from './components/Team';
import Featured from './components/Games';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PressKit from './components/PressKit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/featured',
        element: <Featured />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/presskit',
        element: <PressKit />,
      },
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
