import "./Form.scss";
import { useState } from "react";

import React from 'react'

const Form = () => {
const [housewife, setHousewife] = useState({
  name: "",
  placeOfResidence:"",
  seasonsPresent: "",
  currentRelationshipStatus:"",
  famousQuote:""
})

const handleSubmit = (e) => {
  e.preventDefault()
  fetch('https://rhbackend-wxudo37tma-nw.a.run.app/housewife', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(housewife)
  })
  .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    e.target.reset();
}



  return (
    <div className="background">
    <div className="form-container">
      <h2>Add To The Real Housewives List</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" placeholder="Real housewife name" onInput={(e) => setHousewife({ ...housewife, name: e.target.value})}/>
        <input type="text" placeholder="Place of residence"onInput={(e) => setHousewife({ ...housewife, placeOfResidence: e.target.value})}/>
        <input type="text" placeholder="seasons active" onInput={(e) => setHousewife({ ...housewife, seasonsPresent: e.target.value})}/>
        <input type="text" placeholder="current relationship status" onInput={(e) => setHousewife({ ...housewife, currentRelationshipStatus: e.target.value})}/>
        <input type="text" placeholder="famous quote" onInput={(e) => setHousewife({ ...housewife, famousQuote: e.target.value})}/>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Form