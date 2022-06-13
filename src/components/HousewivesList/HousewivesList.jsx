import "./HousewivesList.scss"

import React from 'react'
import Housewife from "../Housewife/Housewife"

const HousewivesList = (props) => {

    
  

  return (
    <div className="list">
      <h2 className="housewives__header">Past and Current Real Housewives</h2>
      <div className="housewives__container">
      {props.housewives && props.housewives.map(housewife => <Housewife key={housewife.id} housewife={housewife} />)}
      </div>
    </div>
  )
}

export default HousewivesList