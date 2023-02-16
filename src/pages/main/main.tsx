import React from 'react';
import {Outlet} from "react-router-dom";

import Navigation from "../../module/navigation/navigation";

import './style/main.scss'

const Main = () => {
    return (
        <div className={'main-page'}>
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default Main;