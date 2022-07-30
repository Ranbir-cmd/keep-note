import { Box, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Archive from "./Archive";
import { NoteState } from "../context/DataProvider";
import EmptyArchive from "./EmptyArchive";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { archiveNotes } = NoteState();

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />

        {archiveNotes.length > 0 ? (
          <Grid container style={{ marginTop: 24 }}>
            {archiveNotes.map((archive) => (
              <Grid item>
                <Archive key={archive.id} note={archive} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyArchive />
        )}
      </Box>
    </Box>
  );
};

export default Archives;
