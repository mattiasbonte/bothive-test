import React, { useEffect, useState } from 'react'
import Planet from './components/Planet.js'

function App() {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('https://swapi.dev/api/planets/')
            response = await response.json()
            setPlanets(response.results)
        }
        fetchData()
    }, [])

    return (
        <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto my-5 text-center">
            <h1 className=" my-5 font-sans text-xl font-bold">PLANETS</h1>
            <div className="lg:grid-cols-4 md:grid-cols-3 grid grid-flow-row grid-cols-2 gap-4">{planets ? planets.map((planet) => <Planet planet={planet} key={planet.name} />) : 'loading...'}</div>
        </div>
    )
}

export default App
