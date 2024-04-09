import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from '../../pages/home/Home.jsx';
import Contact from '../../pages/contact/contact.jsx';

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactanos" element={<Contact />} />
    </Routes>
  );
}

export default RoutesList;