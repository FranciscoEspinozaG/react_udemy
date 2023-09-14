// import { memo } from "react"
import React from "react";

export const Small = React.memo(({value}) => {

    console.log('Small.jsx')
    return (
        <>
        <small>{value}</small>
        </>
    )
})
