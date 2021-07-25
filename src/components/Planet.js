import React, { useState } from 'react'
import Resident from './Resident.js'

function Planet({ planet }) {
    const [details, setDetails] = useState(true)

    const toggleDetails = () => {
        setDetails(!details)
    }

    return (
        <div
            onClick={toggleDetails}
            key={planet.name}
            title={`Click for more info about ${planet.name}`}
            className="hover:shadow-md hover:border-gray-600 hover:bg-blue-500 py-4 font-bold text-center text-white uppercase bg-blue-400 border-2 border-blue-400 rounded-md shadow-md cursor-pointer"
        >
            <div className={details ? 'text-white' : 'text-gray-800'}>{planet.name}</div>
            {details ? (
                <div></div>
            ) : (
                <div className="mt-4 mb-2">
                    <div className="grid grid-cols-2 gap-4 text-sm font-light lowercase">
                        <div className="text-right text-gray-900">
                            <p>Rotation Period:</p>
                            <p>Orbital Period:</p>
                            <p>Diameter:</p>
                            <p>Climate:</p>
                            <p>Gravity:</p>
                            <p>Terrain:</p>
                            <p>Surface: Water</p>
                            <p>Planet Population:</p>
                            {planet.residents.length ? <p>Residents:</p> : ''}
                        </div>
                        <div className="text-left">
                            <div>{planet.rotation_period}</div>
                            <div>{planet.orbital_period}</div>
                            <div>{planet.diameter}</div>
                            <div>{planet.climate}</div>
                            <div>{planet.gravity}</div>
                            <div>{planet.terrain}</div>
                            <div>{planet.surface_water}</div>
                            <div>{planet.population}</div>
                            {planet.residents ? planet.residents.map((resident) => <Resident key={resident} residentUri={resident} />) : 'loading...'}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Planet
