import React from "react";
import Navbar from "./comps/Navbar";
import { Grid } from "@mui/material";
import Sidebar from "./comps/Sidebar";
import Feed from "./comps/Feed";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CompanyDetailsPage from "./comps/CompanyDetailsPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/company/:id" element={<CompanyDetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
