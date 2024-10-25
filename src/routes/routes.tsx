import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CustomErrorLayout from "../layouts/CustomErrorLayout";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'products', element: <ProductsPage/>},
            // for render another page*
            {path: 'products/:id', element: <ProductDetailsPage/>}
            // for render this page**
            // ,children:[
            //      {path: ':id', element: <ProductDetailsPage/>}
            // ]},

        ],
        errorElement: <CustomErrorLayout/>
    },

]);