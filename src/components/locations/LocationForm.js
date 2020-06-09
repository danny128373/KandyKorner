import React, { useEffect, useState } from 'react'
import ApiManager from '../../modules/ApiManager'

export default function LocationForm(props) {

  const [location, setLocation] = useState({ name: "", address: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  }

  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.name === "" || location.address === "" || location.phone === "") {
      window.alert("Please fill all inputs");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      ApiManager.post(location, 'locations')
        .then(() => props.history.push("/locations"));
    }
  }

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="name">Location Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location name"
            />
            <label className="alignRight" htmlFor="address">Address</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Address"
            />
            <label className="alignRight" htmlFor="phone">Phone Number</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phone"
              placeholder="Phone number"
            />
          </div>
          <br />
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewLocation}
          >Submit</button>
        </fieldset>
      </form>
    </>
  )
}
