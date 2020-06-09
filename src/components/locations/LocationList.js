import React, { useState, useEffect } from 'react'
import ApiManager from '../../modules/ApiManager'
import LocationCard from './LocationCard'

export default function LocationList(props) {
  const [locations, setLocations] = useState([])

  const getLocations = () => {
    ApiManager.getAll("locations").then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    })
  }

  const deleteLocation = id => {
    ApiManager.delete(id, 'locations')
      .then(() => ApiManager.getAll('locations').then(setLocations));
  }

  useEffect(getLocations, [])

  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/locations/new") }}>
          Add New Location
        </button>
      </section>
      <div className="container-cards">
        {locations.map(locationn => <LocationCard key={locationn.id} locationn={locationn} deleteLocation={deleteLocation} {...props} />)}
      </div>
    </>
  )
}