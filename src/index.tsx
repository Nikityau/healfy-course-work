import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./app/app";
import {WithRouter} from "./routes";

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <WithRouter>
        <App></App>
    </WithRouter>
)