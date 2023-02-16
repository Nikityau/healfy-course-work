import React from 'react';

import Plan from "./components/plan/plan";

import { plan } from './data/plan'

import './style/recommendation.scss'

const Recommendation = () => {
    return (
        <div className={'recommendation'}>
            <Plan title={plan.health.title} plans={plan.health.plans}/>
            <Plan title={plan.useful.title} plans={plan.useful.plans}/>
            <Plan title={plan.world.title} plans={plan.world.plans}/>
        </div>
    );
};

export default Recommendation;