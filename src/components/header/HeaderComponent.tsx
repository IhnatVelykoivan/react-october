import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    {/*header*/}
    return (
        <div>
            <span><NavLink to={'about'}> About</NavLink></span>
            <span><NavLink to={'contacts'}> Contacts</NavLink></span>
            <span><NavLink to={'qwerty'}> qwerty</NavLink></span>
            <hr/>

        </div>
    );
};

export default HeaderComponent;