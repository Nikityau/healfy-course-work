import React from 'react';
import {Link} from "react-router-dom";

import {ROUTE_IN_DEVELOPING} from "../../../../routes";

import circle from '../../assets/circle.png'

import './style/dish.scss'

type DishProps = {
    title: string,
}

const Dish = ({ title }:DishProps) => {
    return (
        <div className={'dish'}>
            <div className={'dish__title'}>
                <span>{title}</span>
               <Link to={ROUTE_IN_DEVELOPING}>
                   <img src={circle} alt={'circle'}/>
               </Link>
            </div>
            <div className={'dish_line'}>
            </div>
        </div>
    );
};

export default Dish;