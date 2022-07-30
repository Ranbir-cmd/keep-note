import {
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import {
  UnarchiveOutlined as Unarchive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { NoteState } from "../context/DataProvider";

const Archive = ({ note }) => {
  const {
    setNotes,
    archiveNotes,
    setArchiveNotes,

    setDeletedNotes,
  } = NoteState();

  console.log(archiveNotes);

  const UnarchiveNote = (note) => {
    // updating remaining notes
    const updatedNote = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNote);

    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNote = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNote);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography style={{ fontWeight: 600, color: "#333" }}>
          {note.title}
        </Typography>
        <Typography style={{ color: "#555" }}>{note.text}</Typography>
        <CardActions>
          <Unarchive
            fontSize="small"
            style={{ marginLeft: "auto", color: "#555", cursor: "pointer" }}
            onClick={() => {
              UnarchiveNote(note);
            }}
          />

          <Delete
            fontSize="small"
            style={{ color: "#555", cursor: "pointer" }}
            onClick={() => {
              deleteNote(note);
            }}
          />
        </CardActions>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 240px;
  margin: 10px;
  box-shadow: none;
  border: 1px solid #eee;
`;

export default Archive;
