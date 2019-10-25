import React, { useState, useEffect } from "react"
import humps from 'humps'
import ParkTile from "../components/ParkTile"
import ParkForm from "./ParkForm"

const IndexPage = (props) => {
  const[parks, setParks] = useState([])
  const[currentUserId, setCurrentUserId] = useState(null)

  useEffect(()=> {
    fetch("/api/v1/parks")
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
      setParks(humps.camelizeKeys(parkBody.parks))
      setCurrentUserId(parkBody.scope[0].id)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const deletePark = (thisPark) => {
    fetch(`api/v1/parks/${thisPark}.json`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => {
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
      setParks(humps.camelizeKeys(parkBody.parks))
      setCurrentUserId(parkBody.scope[0].id)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const parkTiles = parks.map(park => {
    return(
      <ParkTile
        key={park.id}
        name={park.name}
        id={park.id}
        deletePark={deletePark}
        parkUserId={park.userId}
        currentUserId={currentUserId}
        image={park.image}
      />
    )
  })

  return(
    <div className="index">
      <div className="index-top">
      <h2 id="index-title">National Parks</h2>
      <h5>Select a National Park to view reviews and details about the park.</h5>
      </div>
      <div className="row tile-box text-center">
        {parkTiles}
      </div>
    </div>
  )
}

export default IndexPage
