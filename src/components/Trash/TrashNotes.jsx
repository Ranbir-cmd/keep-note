import { Box, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import TrashNote from "./TrashNote";
import { NoteState } from "../context/DataProvider";
import EmptyTrash from "./EmptyTrash";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const TrashNotes = () => {
  const { deletedNotes } = NoteState();

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

        {deletedNotes.length > 0 ? (
          <Grid container style={{ marginTop: 24 }}>
            {deletedNotes.map((delNote) => (
              <Grid item>
                <TrashNote key={delNote.id} note={delNote} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyTrash />
        )}
      </Box>
    </Box>
  );
};

export default TrashNotes;
