import "./Dashboard.scss";
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Home from "../../components/Home/Home"
import HousewivesList from "../../components/HousewivesList/HousewivesList";
import Form from "../../components/Form/Form"

const Dashboard = () => {
const [housewives, setHousewives] = useState([]);

const getHousewives = () => {
  fetch("https://rhbackend-wxudo37tma-nw.a.run.app/housewives")
  .then(res => res.json())
  .then(json => setHousewives(json))
  .catch(err => console.log(err))
}

useEffect(() => {
  getHousewives();
}, []);

  return (
    
    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path= "/housewives" element={<HousewivesList housewives={housewives}/>}/>
      <Route path = "/new-housewife" element = {<Form />} />
      </Routes>
    </Router>
    
  )
}

export default Dashboard