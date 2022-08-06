import React from "react";
import Navbar from "./comps/Navbar";
import { Grid } from "@mui/material";
import Sidebar from "./comps/Sidebar";
import Feed from "./comps/Feed";
import { Box } from "@mui/system";
const App = () => {
  return (
    <>
      <Navbar />
      <Feed />
    </>
  );
};

export default App;
