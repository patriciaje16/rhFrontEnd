import "./Housewife.scss";

import React from 'react'

const Housewife = () => {
  return (
    <div className="housewife">
      <h3>{housewife}</h3>
      <p>Country of residence:         {originCountry} </p>
      <p>Seasons appeard: {}</p>
      <p>Current relationship status: {relationship}</p>
      <p>Famous quote(s): {quotes}</p>


    </div>
  )
}

export default Housewife