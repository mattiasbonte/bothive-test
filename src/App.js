import React, { useEffect, useState } from 'react'

function App() {
    const [response, setResponse] = useState({})

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then((response) => response.json())
            .then(setResponse)
    }, [])

    useEffect(() => {
        console.log(response)
    }, [response])

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-5">
            <div className="grid grid-flow-row gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                {response.results
                    ? response.results.map((planet) => (
                          <div className="cursor-help bg-blue-400 hover:shadow-md hover:border-gray-600 border-2 border-blue-400 text-white text-center shadow-md rounded-md  py-4">{planet.name}</div>
                      ))
                    : 'loading...'}
            </div>
        </div>
    )
}

export default App
