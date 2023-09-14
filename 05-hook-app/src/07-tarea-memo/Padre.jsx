import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
      (num) => {
        setValor( (valorAnterior) => valorAnterior + num)
      },
      [],
    )

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    return (
        <div className="container-fluid p-4 shadow">
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            <div className="numeros d-flex gap-3">

                {
                    numeros.map( n => (
                        <Hijo 
                            key={ n }
                            numero={ n }
                            incrementar={ incrementar }
                        />
                    ))
                }

                {/* <Hijo /> */}
            </div>

        </div>
    )
}
