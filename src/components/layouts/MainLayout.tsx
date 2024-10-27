import React from 'react';
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>    {/*place for info*/}
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;