import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Shared/Layout.jsx';
import Button from './components/Button/Button.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import Tabs from './components/Tabs/Tabs.jsx';
import Header from './components/NavBar/Header.jsx';
import Sliders from './components/Slider/Sliders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/button',
        element: <Button />
      },
      {
        path: '/accordion',
        element: <Accordion />
      },
      {
        path: '/tabs',
        element: <Tabs />
      },
      {
        path: '/navbar',
        element: <Header />
      },
      {
        path: '/sliders',
        element: <Sliders />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
