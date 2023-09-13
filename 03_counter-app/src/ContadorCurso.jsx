import PropTypes from 'prop-types'
import { useState } from 'react'


export const ContadorCurso = () => {

    const [totalClases, setTotalClases] = useState(502);
    const [clasesTomadas, setClasesTomadas] = useState(0);
    const [porcentajeClases, setPorcentajeClases] = useState(0);

    const handleCantidadClases = (event) => {
        const valor = parseFloat(event.target.value);
        if(!isNaN(valor)){
            setClasesTomadas(valor);
            let porCien = clasesTomadas * 100,
                dividido = porCien / totalClases,
                porcentaje = Math.round(dividido);
            setPorcentajeClases(porcentaje);
            console.log(dividido)
        }
        console.log(valor);
    }

    const handleAddClass = () => {
        setClasesTomadas(clasesTomadas + 1)
    }

    const handleSubsClass = () => {
        setClasesTomadas(clasesTomadas - 1)
    }

    return (
        <>
        <div className="contador bg-primary mt-5">
            <div className="datos">
                <h1>El total de clases son: {totalClases}</h1>
            </div>

            <div className="inputs">
                <div className="porcentaje">
                    <p>
                        Llevo {clasesTomadas} clases, el porcentaje de avance es:
                        <br />
                        {porcentajeClases}%
                    </p>
                </div>

                <div className="form-group">
                    <label htmlFor="clasesListas">Cuantas clases llevo</label>
                    <input type="number" id="clasesListas" value={clasesTomadas} onChange={handleCantidadClases} onBlur={handleCantidadClases} />
                </div>
                <button className='btn' onClick={handleSubsClass}>Quitar clase</button>
                <button className='btn' onClick={handleAddClass}>Agregar clase</button>
            </div>
        </div>
        </>
    )
}