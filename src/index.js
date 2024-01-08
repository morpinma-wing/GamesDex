import React from 'react';
import { createRoot } from 'react-dom/client';
import {  createBrowserRouter,  RouterProvider} from "react-router-dom";
import App from './Pages/Home';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <App/>,
  },
  {
    path: "/",
    element: <App/>,
  }

]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
  </>
);