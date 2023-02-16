import React from 'react';

import Dish from "../dish/dish";

import './style/dishes.scss'

const Dishes = () => {
    return (
        <div className={'dishes'}>
            <Dish title={'завтрак'}/>
            <Dish title={'обдед'}/>
            <Dish title={'ужин'}/>
            <Dish title={'перекус'}/>
        </div>
    );
};

export default Dishes;