import React, { useState, useEffect } from 'react'

function Resident({ residentUri }) {
    const [resident, setResident] = useState('')

    useEffect(() => {
        fetch(residentUri)
            .then((response) => response.json())
            .then((response) => setResident(response))
    })


    return <div>{resident.name}</div>
}

export default Resident
