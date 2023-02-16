import React from 'react';
import cn from 'classnames'

import './style/stats.scss'

type StatsProps = {
    number: number,
    title: string,
    isHighlight?: boolean
}

const Stats = ({number, title, isHighlight}: StatsProps) => {
    return (
        <div className={cn('stats', {
            'stats_highlight': isHighlight
        })}>
            <div className={'stats-num'}>
                <span>{number}</span>
            </div>
            <div className={'stats-title'}>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default Stats;