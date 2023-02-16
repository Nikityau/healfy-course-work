import React from 'react';

import Linkers from "./components/linkers/linkers";

import {ROUTE_DIARY, ROUTE_PROFILE, ROUTE_RECOMMENDATION} from "../../routes";

import './style/navigation.scss'

const Navigation = () => {
    return (
        <div className={'navigation'}>
            <div className={'navigation__container'}>
                <Linkers textLink={'дневник'} url={ROUTE_DIARY}/>
                <Linkers textLink={'рекомендации'} url={ROUTE_RECOMMENDATION}/>
                <Linkers textLink={'профиль'} url={ROUTE_PROFILE}/>
            </div>
        </div>
    );
};

export default Navigation;