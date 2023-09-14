import React from 'react';

// eslint-disable-next-line react/display-name, react/prop-types
export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-outline-primary"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
