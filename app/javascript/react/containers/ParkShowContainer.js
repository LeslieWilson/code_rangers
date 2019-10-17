import React, { useState, useEffect } from 'react'
import ParkDetailTile from '../components/ParkDetailTile'

export const ParkShowContainer = (props) => {
  const [park, setPark] = useState({})

  useEffect(() => {
    let parkId = props.match.params.id
    fetch(`/api/v1/parks/${parkId}`)
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
    .then(body => {
      let thisPark = body
      setPark(thisPark)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  return (
    <div>
      <ParkDetailTile
        name={park.name}
        location={park.location}
        description={park.description}
        image={park.image}
      />
    </div>
  )
}

export default ParkShowContainer
