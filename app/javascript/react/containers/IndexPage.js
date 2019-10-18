
import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ParkTile from "../components/ParkTile"
import ParkForm from "./ParkForm"

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
        id={park.id}
      />
    )
  })

  return(
    <div>
      <h3>National Parks</h3>
      <h5>Select a National Park to view reviews and details about the park.</h5>
      {parkTiles}
    </div>
  )
}

export default IndexPage
