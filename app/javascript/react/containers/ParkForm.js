import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const ParkForm = (props) => {
  const[errors, setErrors] = useState({})
  const[shouldRedirect, setShouldRedirect] = useState(false)
  const[newPark, setNewPark] = useState({
    name: "",
    location: "",
    description: "",
    image: ""
  })

  const handleFieldChange = event => {
    setNewPark({
      ...newPark,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewPark({
      name: "",
      location: "",
      description: "",
      image: ""
    })
    setErrors({})
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "location", "description", "image"]
    requiredFields.forEach(field => {
      if (newPark[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleParkSubmit = (event) =>{
    event.preventDefault()
    if (!validForSubmission()){
      return
    }

    let payload = {
      name:newPark.name,
      location:newPark.location,
      description:newPark.description,
      image:newPark.image
    }

    addNewPark(payload)
    setNewPark({
      name: "",
      location: "",
      description: "",
      image: ""
    })
  }

  const addNewPark = payload => {
    fetch("/api/v1/parks", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error);
      }
    })
    .then((response)=>{
      return response.json()
    })
    .then((persistedData)=>{
        setShouldRedirect(true)
    })
    .catch((error) => {console.error("error in fetch")
    })
  }

  if (shouldRedirect){
    return <Redirect to="/parks" />
  }


  return(
    <div className="form" id="park-review-form">
      <h2 id="review-form-title">Submit a Park</h2>
      <form onSubmit={handleParkSubmit} className="new-parkform">
        <ErrorList errors={errors} />
        <label>
          Park Name
          <input
            name="name"
            type="text"
            onChange={handleFieldChange}
            value={newPark.name}
          />
        </label>

        <label>
          Park location
          <input
            name="location"
            type="text"
            onChange={handleFieldChange}
            value={newPark.location}
          />
        </label>

        <label>
          Park Description
          <textarea
            name="description"
            rows="3"
            onChange={handleFieldChange}
            value={newPark.description}
          />
        </label>

        <label>
          Park Image URL
          <input
            name="image"
            type="text"
            onChange={handleFieldChange}
            value={newPark.image}
          />
        </label>

        <input className="button submit-it" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default ParkForm
