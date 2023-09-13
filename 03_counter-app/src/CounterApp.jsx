import PropTypes from 'prop-types'
import { useState } from 'react'


export const CounterApp = ({numero}) => {

    const [contador, setContador] = useState(numero)
    const [valorInput, setValorInput] = useState('');
    
    const handleAdd = () => {
        setContador((c) => c + 1);
    }

    const handleSusbs = () => {
        setContador(contador - 1)
    }

    const handleReset = () => {
        setContador(numero)
    }

    const handleValorInput = (event) =>{
        const valor = parseFloat(event.target.value);
        if(!isNaN(valor)){
            setValorInput(valor);
            setContador(valor);
            console.log(`el input entrega ${valorInput} del tipo ${typeof(valorInput)}`);
        }else{
            setValorInput('');
            console.warn('No hay número');
        }
    }

    return (
        <>
        <div className="contador bg-primary">
            <div className="datos">
                <h1>Counter App</h1>
                <h2>{contador}</h2>
            </div>

            <div className="buttons">
                <button className='btn' onClick={ handleSusbs }>-1</button>
                <button className='btn' onClick={ handleAdd }>+1</button>
                <button className='btn' onClick={ handleReset }>Reset</button>
            </div>
            {/* <p>{valorInput}</p> */}
            <div className="inputs">
                <div className="form-group">
                    <label htmlFor="inputCounter">Ingresa un número</label>
                    <input type="number" id="inputCounter" value={valorInput} onChange={handleValorInput} />
                </div>
            </div>
        </div>
        </>
    )
}

CounterApp.propTypes = {
    numero: PropTypes.number
}