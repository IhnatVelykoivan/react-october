import React from 'react';
import {useLocation} from "react-router-dom";
import {IProduct} from "../models/IProduct";
import product from "../components/product/Product";

const ProductDetailsPage = () => {
    let {state:{data}} = useLocation();
    const product:IProduct=data;
    //Virt's leg

    return (
        <div>
            {
                JSON.stringify(product)
            }
        </div>
    );
};

export default ProductDetailsPage;