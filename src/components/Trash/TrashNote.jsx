import {
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as DeleteForever,
} from "@mui/icons-material";
import { NoteState } from "../context/DataProvider";

const TrashNote = ({ note }) => {
  const {
    notes,
    setNotes,

    deletedNotes,
    setDeletedNotes,
  } = NoteState();

  const restoreNote = (note) => {
    // updating remaining notes
    const updatedNote = deletedNotes.filter((data) => data.id !== note.id);
    setDeletedNotes(updatedNote);

    // archiving note
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setDeletedNotes(updatedNote);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography style={{ fontWeight: 600, color: "#333" }}>
          {note.title}
        </Typography>
        <Typography style={{ color: "#555" }}>{note.text}</Typography>
        <CardActions>
          <DeleteForever
            fontSize="small"
            style={{ marginLeft: "auto", color: "#555", cursor: "pointer" }}
            onClick={() => {
              deleteNote();
            }}
          />
          <Restore
            fontSize="small"
            style={{ color: "#555", cursor: "pointer" }}
            onClick={() => {
              restoreNote(note);
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

export default TrashNote;
