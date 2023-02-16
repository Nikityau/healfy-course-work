import React from "react";

import {RoutesSettings} from "../routes";

import '../assets/fonts/fonts.scss'
import './style/app.scss'

const App = (props) => {

    return (
        <div className={'app'}>
            <RoutesSettings/>
        </div>
    );
};

export default App;