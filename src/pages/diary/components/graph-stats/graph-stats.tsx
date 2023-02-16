import React from 'react';

import Graphs from "../graphs/graphs";

import './style/graph-stats.scss'

const GraphStats = () => {
    return (
        <div className={'graph-stats'}>
            <Graphs title={'углеводы'} current={110} max={220}/>
            <Graphs title={'белки'} current={24} max={80}/>
            <Graphs title={'жиры'} current={20} max={64}/>
        </div>
    );
};

export default GraphStats;