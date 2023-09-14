import { useLayoutEffect, useRef, useState } from "react"

export const DetallesUsers = ({id, name, username, city}) => {

    const contenedorUserDetails = useRef();

    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {
        const {width, height} = contenedorUserDetails.current.getBoundingClientRect();

        setBoxSize({width, height})
    }, [])

    return (
    <>
    <div className="bloquequote text-end d-flex">
        <div className="container border" ref={contenedorUserDetails} style={{width: 'fit-content'}}>
            <h2 className="mb-1" data-id={id}>{name}</h2>
            <sub className="blockquote-footer">
                {username} | {city}
            </sub>
        </div>
    </div>
    <code>
        {JSON.stringify(boxSize)}
    </code>
    </>
    )
}