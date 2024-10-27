import React from 'react';
import HeaderComponent from "../../header/HeaderComponent";
import FooterComponent from "../../footer/FooterComponent";

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <> error 404  -_-  not found</>
            <FooterComponent/>
        </div>
    );
};

export default ErrorLayout;