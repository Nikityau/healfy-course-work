import React from 'react';
import {Link} from "react-router-dom";

import {ROUTE_IN_DEVELOPING} from "../../../../routes";

import './style/plan-card.scss'

type PlanCardProps = {
    title: string,
    foodImage: string,
    day: string,
}

const PlanCard = ({day, foodImage, title}: PlanCardProps) => {
    return (
        <div className={'plan-card'}>
            <Link to={ROUTE_IN_DEVELOPING}>
                <div className={'plan-card__main'}>
                    <div className={'plan-card__img'}>
                        <img src={foodImage} alt={'food'}/>
                    </div>
                    <div className={'plan-card__days'}>
                        <span>{day}</span>
                    </div>
                    <div className={'plan-card__title'}>
                        <span>{title}</span>
                    </div>
                </div>
                <div className={'plan-card__back'}>
                </div>
            </Link>
        </div>
    );
};

export default PlanCard;