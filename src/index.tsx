import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// let routes = createBrowserRouter([]);
root.render(
    <RouterProvider router={routes}/>
);
