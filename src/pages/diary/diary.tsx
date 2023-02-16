import React from 'react';

import NumericStats from "./components/numeric-stats/numeric-stats";
import GraphStats from "./components/graph-stats/graph-stats";
import Dishes from "./components/dishes/dishes";

import line from './assets/line.png'

import './style/diary.scss'

const Diary = () => {
    return (
        <div className={'diary-page'}>
            <div className={'diary-page__container'}>
                <NumericStats/>
                <GraphStats/>
            </div>
            <div className={'diary-page__line'}>
                <img src={line} alt={'line'}/>
            </div>
            <div className={'diary-page__container'}>
                <Dishes/>
            </div>
        </div>
    );
};

export default Diary;