import React, { useState, useEffect } from "react"
import humps from 'humps'
import ParkTile from "../components/ParkTile"


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
    <div>
      <h3>National Parks</h3>
      <h5>Select a National Park to view reviews and details about the park.</h5>
      {parkTiles}
    </div>
  )
}

export default IndexPage
