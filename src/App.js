import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import ListEducations from "./pages/educationPages/ListEducations";
import AddEducation from "./pages/educationPages/AddEducation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/education-infos" element={<ListEducations />} />
        <Route path="/add-education" element={<AddEducation/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
