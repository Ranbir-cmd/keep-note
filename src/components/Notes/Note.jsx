import {
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  DeleteOutlineTwoTone,
} from "@mui/icons-material";
import { NoteState } from "../context/DataProvider";

const AllNotes = ({ note }) => {
  const {
    notes,
    setNotes,
    archiveNotes,
    setArchiveNotes,
    deletedNotes,
    setDeletedNotes,
  } = NoteState();

  const archiveNote = (note) => {
    // updating remaining notes
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNote);

    // archiving note
    setArchiveNotes((prevState) => [note, ...prevState]);
  };

  const deleteNote = () => {
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNote);
    setDeletedNotes((prevState) => [note, ...prevState]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography style={{ fontWeight: 600, color: "#333" }}>
          {note.title}
        </Typography>
        <Typography style={{ color: "#555" }}>{note.text}</Typography>
        <CardActions>
          <Archive
            fontSize="small"
            style={{ marginLeft: "auto", color: "#555", cursor: "pointer" }}
            onClick={() => {
              archiveNote(note);
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

export default AllNotes;
