import "./Nav.scss";
import { Link } from "react-router-dom";

import React from 'react'

const Nav = () => {
  return (
    <div>
      <Link className="nav-menu_item" to="/">Home</Link>
      <Link className="nav-menu_item" to="/housewives"></Link>
      <Link className="nav-menu_item" to="/new-housewife">Add Housewife</Link>
    </div>
  )
}

export default Nav