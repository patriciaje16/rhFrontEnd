import "./Housewife.scss";
import React from 'react'
import { useState } from "react";
import UpdateHousewife from "../UpdateHousewife/UpdateHousewife";

const Housewife = (props) => {
  const [showUpdateBox, setShowUpdateBox] = useState(false)

  const {
    name,
    placeOfResidence,
    seasonsPresent,
    currentRelationshipStatus,
    famousQuote,
    housewifeId

  } = props.housewife;

  const handleDelete = () => {
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

  const toggleUpdateBox = () => {
    setShowUpdateBox(!showUpdateBox)
  }


  return (
    <div className="housewife">
      {showUpdateBox && <UpdateHousewife toggleUpdateBox={toggleUpdateBox} name={name}
        placeOfResidence={placeOfResidence} seasonsPresent={seasonsPresent}
        currentRelationshipStatus={currentRelationshipStatus} famousQuote={famousQuote} housewifeId={housewifeId} />}
      <h3 className="housewife__name">{name}</h3>
      <p className="housewife__country">Country of residence:         {placeOfResidence} </p>
      <p className="housewife__season" >Seasons appeared: {seasonsPresent}</p>
      <p className="housewife__relationship">Current relationship status: {currentRelationshipStatus}</p>
      <p className="housewife__quote">Famous quote(s): {famousQuote}</p>
      <button type="button" className="btn__delete" onClick={handleDelete}>Delete</button>
      <button type="button" className="btn__update" onClick={toggleUpdateBox}>Update</button>

    </div>
  )
}

export default Housewife