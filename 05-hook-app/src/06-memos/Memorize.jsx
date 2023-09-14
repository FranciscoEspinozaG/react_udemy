import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
    const {counter, increment} = useCounter(10);

    const [show, setShow] = useState(true);

    const toggleValue = () =>{
        setShow( !show )
    }

    return (
        <>
        <div className="container-fluid p-4 shadow">
            <h1>Counter: <Small value={counter}/></h1>
            <hr />
            <div className="d-flex flex-wrap gap-4">
                <button
                    onClick={increment}
                    className="btn btn-primary shadow">
                    +1
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
