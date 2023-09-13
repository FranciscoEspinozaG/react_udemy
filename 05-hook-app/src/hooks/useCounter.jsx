import { useState } from "react"

export const useCounter = (initialValue = 1, minimalAmount = 1, steps = 1)=>{

    const [counter, setCounter] = useState(initialValue)

    const increment = ()=>{
        // console.log('increment')
        setCounter(counter + steps);
    }

    const decrement = ()=>{
        // console.log('decrement')
        if(counter <= minimalAmount){
            // console.log(`Minimo ${minimalAmount} productos`);
            return
        }else{
            setCounter(counter - steps);
        }
    }

    const reset = ()=>{
        // console.log('reset')
        setCounter(initialValue);
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}