import React, {FC} from 'react';
import {apiProdObj} from "../../data";
import {IProdModel} from "../model/IProdModel";
import Product from "../product/Product";

const Products:FC = () => {

    const products:IProdModel[] = apiProdObj.products;
    return (
        <div>
            {
                products.map((product:IProdModel)=> (<Product item={product}/>))
            }
        </div>
    );
};

export default Products;