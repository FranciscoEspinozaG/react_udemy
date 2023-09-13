import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})

    useEffect(() => {
        const mousePosition = ({x, y}) => {
            setCoords({x, y});
        }

        window.addEventListener('mousemove', mousePosition);

        return () => {
            window.removeEventListener('mousemove', mousePosition);
        }
    }, [])
    
  return (
    <>
        <h4>Usuario ya existe</h4>
        <p>{`Posiciónes X:${coords.x}, Y:${coords.y}`}</p>
    </>
  )
}