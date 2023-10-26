import React from 'react';
import ReactDOM from 'react-dom/client';
// // import { HookApp } from './HookApp';
// import { CounterApp } from './01-useState/CounterApp';

// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';

// import './index.css';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { UseLayout } from './05-useLayout/UseLayout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer'

import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    <TodoApp />
//     <Padre/>
//     {/* <CallbackHook/> */}
//     {/* <MemoHook/> */}
//     {/* <Memorize/> */}
//     {/* <UseLayout/> */}
//     {/* <FocusScreen/> */}
//     {/* <MultipleCustomHooks/> */}
//     {/* <CounterApp /> */}
//     {/* <CounterWithCustomHook/> */}
//     {/* <SimpleForm/> */}
//     {/* <FormWithCustomHook/> */}
//   </React.StrictMode>,
)
