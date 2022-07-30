import { Box, Grid } from "@mui/material";
import React from "react";
import Form from "./Form";
import { styled } from "@mui/material/styles";
import Note from "./Note";
import { NoteState } from "../context/DataProvider";
import EmptyNote from "./EmptyNote";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = NoteState();

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <Grid container style={{ marginTop: 24 }}>
            {notes.map((note) => (
              <Grid item>
                <Note key={note.id} note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNote />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
