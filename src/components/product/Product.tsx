import React, {FC} from 'react';
import {IProdModel} from "../model/IProdModel";

type TypeProps = {item:IProdModel}
const Product:FC<TypeProps> = ({item}) => {
    return (
        <div>
            <>{item.id}</>
            <>{item.title}</>
            <>{item.description}</>
        </div>
    );
};

export default Product;