import "./Housewife.scss";

import React from 'react'

const Housewife = (props) => {
  const {
    name,
    placeOfResidence,
    seasonsPresent,
    currentRelationshipStatus,
    famousQuote
  } = props.housewife;

  return (
    <div className="housewife">
      <h3>{name}</h3>
      <p>Country of residence:         {placeOfResidence} </p>
      <p>Seasons appeared: {seasonsPresent}</p>
      <p>Current relationship status: {currentRelationshipStatus}</p>
      <p>Famous quote(s): {famousQuote}</p>


    </div>
  )
}

export default Housewife