import React, {useEffect} from 'react';
import {Navigate} from "react-router-dom";

import {ROUTE_IN_DEVELOPING} from "../../routes";

const Profile = () => {
    return (
        <Navigate to={ROUTE_IN_DEVELOPING} replace={true}/>
    );
};

export default Profile;