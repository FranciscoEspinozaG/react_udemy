import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HookApp } from './HookApp';
import { CounterApp } from './01-useState/CounterApp';

import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';

import './index.css';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FocusScreen/>
    <FocusScreen/>
    <MultipleCustomHooks/>
    <CounterApp />
    <CounterWithCustomHook/>
    <SimpleForm/>
    <FormWithCustomHook/>
  </React.StrictMode>,
)