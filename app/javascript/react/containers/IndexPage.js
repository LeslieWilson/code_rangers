import React, { useState, useEffect } from "react"
import ParkTile from "../components/ParkTile"

const IndexPage = (props) => {
    const[parks, setParks] = useState([])

    useEffect(()=> {
        fetch("/api/v1/parks.json")
        .then((response)=> {
            if (response.ok) {
                return response
            } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage)
                throw(error)
            }
        })
        .then(response => response.json())
        .then(parkBody => {
            setParks(parkBody)
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])


    const parkTiles = parks.map(park => {
        return(
            <ParkTile
            key={park.id}
            name={park.name}
            />

        )
    })

    return(
        <div>
        <h3> Park Index Container</h3>
        {parkTiles}
        </div>

    )
}

export default IndexPage
