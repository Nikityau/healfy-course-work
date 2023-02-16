import React from 'react';

import './style/graphs.scss'

type GraphsProps = {
    title: string,
    current: number,
    max: number
}

const Graphs = ({max, current, title}: GraphsProps) => {
    return (
        <div className={'graphs'}>
            <div className={'graphs__title'}>
                <span>{title}</span>
            </div>
            <div className={'graphs__graph'}>
                <div className={'graphs__inner'}
                    style={{
                        width: `${80 * (current / max)}px`
                    }}
                ></div>
            </div>
            <div className={'graphs__indexes'}>
                <span>{ current + '/' + max }</span>
            </div>
        </div>
    );
};

export default Graphs;