import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      (salto) => {
        console.log('useCallback')
        setCounter( (val) => val + salto );
      },
      [],
    )
    
    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
        <div className="container-fluid p-4 shadow">
          <h1>useCallback Hook: {counter}</h1>
          <hr />
          <ShowIncrement increment={increment}/>
        </div>
        </>
    )
}
