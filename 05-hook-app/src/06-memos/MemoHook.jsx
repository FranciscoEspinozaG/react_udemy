import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( numeroIteraciones = 10 ) => {
    for(let i = 0; i < numeroIteraciones; i++){
        console.log('contó')
    }
    return `${numeroIteraciones}, realizadas`;
}

export const MemoHook = () => {
    const {counter, increment, reset} = useCounter(1000);

    const [show, setShow] = useState(true);

    const toggleValue = () =>{
        setShow( !show )
    }

    const valorMemorizado = useMemo( ()=> heavyStuff(counter), [counter] )

    return (
        <>
        <div className="container-fluid p-4 shadow">
            <h1>Counter: {counter}</h1>
            <hr />
            <h4>{valorMemorizado}</h4>
            <div className="d-flex flex-wrap gap-4">
                <button
                    onClick={increment}
                    className="btn btn-primary shadow">
                    +1
                </button>
                <button
                    onClick={reset}
                    className="btn btn-outline-danger shadow">
                        Reset
                </button>
                <button
                    onClick={toggleValue}
                    className="btn btn-outline-primary shadow">
                    Show/Hide {JSON.stringify(show)}
                </button>
            </div>
        </div>
        </>
    )
}
