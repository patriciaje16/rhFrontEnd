import "./Form.scss";

import React from 'react'

const Form = () => {
  return (
    <div className="form-container">
      <h2>Add To The RealHousewives List</h2>
      <form>
        <input type="text" placeholder="RealHousewife Name"/>
        <input type="text" placeholder="origin country"/>
        <input type="text" placeholder="seasons active"/>
        <input type="text" placeholder="current relationship status"/>
        <input type="text" placeholder="famous quote"/>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  )
}

export default Form