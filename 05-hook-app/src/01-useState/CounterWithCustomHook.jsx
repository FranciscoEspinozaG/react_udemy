import { useState } from "react";
import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const [minimalAmount, setMinimalAmount] = useState(0);

    const [pasos, setPasos] = useState(minimalAmount)

    const {counter, increment, decrement, reset} = useCounter(minimalAmount, minimalAmount, pasos);

    const handlePasos = ({target})=>{
        const {value} = target;
        console.log(value)
        if(!isNaN(value) && value){
            setPasos(parseFloat(value));
            setMinimalAmount(parseFloat(minimalAmount));
        }else{
            setPasos(0);
        }
    }

    return (
        <>
        <div className="container-fluid p-3 shadow">
            
            <h1>La cuenta es: {counter}</h1>
            <hr />
            <div className="form-group">
                <label htmlFor="inputPasos">Contar de {pasos} en {pasos}</label>
                <input type="number" name="inputPasos" className="form-control mb-2" placeholder="Pasos de:" onChange={handlePasos}/>
            </div>
            <div className="d-flex flex-wrap gap-0">
                <button className="btn btn-primary rounded-0 rounded-start" onClick={decrement} disabled={counter <= minimalAmount ? true : false} >-{pasos}</button>
                <button className="btn btn-primary rounded-0" onClick={reset}>Reset</button>
                <button className="btn btn-primary rounded-0 rounded-end" onClick={increment}>+{pasos}</button>
            </div>
        </div>
        </>
    )
}
