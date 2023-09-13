import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleUseRef = () =>{
        inputRef.current.select();
    };

    return (
        <div className="container-fluid p-4 shadow">
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                className="form-control mb-2"
                type="text"
                placeholder="Ingrese su nombre" />

            <button
                className="btn btn-primary mt-2"
                onClick={handleUseRef}>
                Set Focus
            </button>
        </div>
    )
}
