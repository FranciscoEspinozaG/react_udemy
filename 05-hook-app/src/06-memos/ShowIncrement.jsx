import React from "react";

// eslint-disable-next-line react/display-name, react/prop-types
export const ShowIncrement = React.memo( ({increment}) => {
    console.log('cargada');
    return (
        <>
        <button
            className="btn btn-primary"
            onClick={
                () => {increment(5)}
            }
            >
                +1
        </button>
        </>
    )
});