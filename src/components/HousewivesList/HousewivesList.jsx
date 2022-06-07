import "./HousewivesList.scss"

import React from 'react'
import Housewife from "../Housewife/Housewife"

const HousewivesList = (props) => {
  return (
    <>
      <h2 className="heading">Past and Current Real Housewives</h2>
      <div className="container">
      {props.housewives && props.housewives.map(housewife => <Housewife key={housewife.id} housewife={housewife} />)}
      </div>
    </>
  )
}

export default HousewivesList