import React from 'react';

import Plans from "../plans/plans";

import './style/plan.scss'

type PlanProps = {
    title: string,
    plans: any[]
}

const Plan = ({plans, title}:PlanProps) => {
    return (
        <div className={'plan'}>
            <div className={'plan-title'}>
                <span>{ title }</span>
            </div>
            <Plans plans={plans}/>
        </div>
    );
};

export default Plan;