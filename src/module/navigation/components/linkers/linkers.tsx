import React from 'react';
import {Link, useLocation} from "react-router-dom";
import cn from 'classnames'

import {isLinksCompare} from "../../helpers/isLinksCompare";

import './style/linkers.scss'

type LinkerProps = {
    textLink: string,
    url: string
}
const Linkers = ({ url, textLink }:LinkerProps) => {

    const location = useLocation()

    return (
        <div className={cn('linkers',
            {
                'linkers_current': isLinksCompare(location.pathname, url)
            })}>
           <Link to={url}>
               <span>{ textLink }</span>
           </Link>
        </div>
    );
};

export default Linkers;