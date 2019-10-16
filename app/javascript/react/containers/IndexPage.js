import React, { useState, useEffect } from "react"


const IndexPage = (props) => {
    const[parks, setParks] = useState([])

    useEffect(()=>{
        fetch("/api/v1/parks.json")
        .then(response => response.json())
        .then(parkBody =>{

            setParks(parkBody)
        })

        .catch(error => console.error(`Error in fetch: ${error.messagegit }`))
    })
}
