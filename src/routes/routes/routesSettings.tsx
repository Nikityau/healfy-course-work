import React from 'react';
import {Route, Routes} from "react-router-dom";


import Main from "../../pages/main/main";
import Diary from "../../pages/diary/diary";
import Recommendation from "../../pages/recommendation/recommendation";
import Profile from "../../pages/profile/profile";
import InDeveloping from "../../pages/in-developing/in-developing";

import {ROUTE_DIARY, ROUTE_HOME, ROUTE_IN_DEVELOPING, ROUTE_PROFILE, ROUTE_RECOMMENDATION} from "./routes";

const RoutesSettings = () => {
    return (
        <Routes>
            <Route path={ROUTE_HOME} element={<Main/>}>
                <Route path={ROUTE_DIARY} element={<Diary/>}/>
                <Route path={ROUTE_RECOMMENDATION} element={<Recommendation/>}/>
                <Route path={ROUTE_PROFILE} element={<Profile/>}/>
                <Route path={ROUTE_IN_DEVELOPING} element={<InDeveloping/>}/>
            </Route>
        </Routes>
    );
};

export default RoutesSettings;