import "./Housewife.scss";

import React from 'react'

const Housewife = (props) => {
  const {
    name,
    placeOfResidence,
    seasonsPresent,
    currentRelationshipStatus,
    famousQuote,
    housewifeId

  } = props.housewife;

  const handleDelete = () => {
    console.log("it works")
    fetch(
      'https://rhbackend-wxudo37tma-nw.a.run.app/housewife/' + housewifeId,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    console.log('deleted');
  };

  



  return (
    <div className="housewife">
      <h3 className="housewife__name">{name}</h3>
      <p className="housewife__country">Country of residence:         {placeOfResidence} </p>
      <p className="housewife__season" >Seasons appeared: {seasonsPresent}</p>
      <p className="housewife__relationship">Current relationship status: {currentRelationshipStatus}</p>
      <p className="housewife__quote">Famous quote(s): {famousQuote}</p>
      <button type="button" className="btn" onClick={handleDelete}>Delete</button>


    </div>
  )
}

export default Housewife