import React, { useEffect, useState } from 'react'
import Planet from './components/Planet.js'

function App() {
    const [planets, setPlanets] = useState([])
    const [uri, setUri] = useState('https://swapi.dev/api/planets/')
    const [pagination, setPagination] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(uri)
            response = await response.json()
            setPlanets(response.results)
            setPagination({ next: response.next, previous: response.previous })
        }
        fetchData()
    }, [uri])

    return (
        <div className="max-w-7xl sm:px-6 lg:px-8 mx-5 mx-auto my-5 text-center">
            <h1 className=" my-5 font-sans text-xl font-bold">PLANETS</h1>
            <div className="lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid grid-flow-row gap-4">
                {planets ? planets.map((planet) => <Planet planet={planet} key={planet.name} />) : 'loading...'}
            </div>
            <div className="inline-flex justify-center my-5">
                {pagination?.previous ? (
                    <button onClick={() => setUri(pagination.previous)} className="hover:bg-gray-400 px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-l-lg">
                        Prev
                    </button>
                ) : (
                    ''
                )}
                {pagination?.next ? (
                    <button onClick={() => setUri(pagination.next)} className="hover:bg-gray-400 px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-r-lg">
                        Next
                    </button>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default App
