import React from 'react';
import ReactDom from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
import {CounterApp} from './CounterApp';
import {ContadorCurso} from './ContadorCurso';
import {FirstApp} from './FirstApp';


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld />
        <FirstApp/>
        {/* <CounterApp numero={1}/> */}
        <ContadorCurso/>
    </React.StrictMode>
)