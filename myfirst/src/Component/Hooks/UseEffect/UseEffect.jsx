import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [value, setValue] = useState(0)
    const [names, setName] = useState("Sawan")

    useEffect(() => {
        console.log("useEffect Functoion")
    }, [names])
    return (
        <>
            <h1>UseEffect</h1>
            <h5>
                {value}
            </h5>

            <button onClick={() => { setValue(value + 1) }}>+</button>

            <h4>{names}</h4>
            <button onClick={() => { setName("Yadav") }}>Update</button>
        </>
    )
}

export default UseEffect