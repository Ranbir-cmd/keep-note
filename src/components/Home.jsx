import Notes from "./Notes/Notes";
import React from "react";
import SwipeDrawer from "./SwipeDrawer";
import { Box } from "@mui/material";
import Archives from "./Archive/Archives";
import TrashNotes from "./Trash/TrashNotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <BrowserRouter>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/trash" element={<TrashNotes />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Home;
