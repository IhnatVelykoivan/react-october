import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Main from "../pages/Main";
import About from "../pages/About";
import CustomErrorLayout from "../layouts/CustomErrorLayout";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

export const routes = createBrowserRouter
([{
    path: '/', element: <MainLayout/>, children: [
        {
            index: true, element: <HomePage/>
        },
        {
                path: 'main', element: <Main/>,
            // children: [
            //     {path: 'zxc', element: <div>....</div>}
            // ]
        },
        {
            path: 'about', element: <About/>
        },
    ],
    errorElement: <CustomErrorLayout/>},
    {path: '/admin', element: <AdminLayout/>
    }]);

