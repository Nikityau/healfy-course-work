import React from 'react';

import Stats from "../stats/stats";

import './style/numeric-stats.scss'

const NumericStats = () => {
    return (
        <div className={'numeric-stats'}>
            <Stats number={1284} title={'съедено'}/>
            <Stats number={556} title={'осталось'} isHighlight={true}/>
            <Stats number={0} title={'сожжено'}/>
        </div>
    );
};

export default NumericStats;