import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AboutPage from "./components/pages/about/AboutPage";
import ContactsPage from "./components/pages/contacts/ContactsPage";
import ErrorLayout from "./components/layouts/error/ErrorLayout";
import SingleContactPage from "./components/pages/contact/SingleContactPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
        children:[
        {
            path:'about',
            // element:<h2>About</h2>
            element:<AboutPage/>
        },
        {
            path:'contacts',
            // element:<h3>Contacts</h3>
            element:<ContactsPage/>
        },
        {
            path:'contacts/:id',
            element:<SingleContactPage/>
        },
        {
            element: <AboutPage/>,
            // element:<h1>default element</h1>,
            index:true
        }
        ]
    },
    //place for deps??
]);

root.render(
    <RouterProvider router={router}/>
);
