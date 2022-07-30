import { TextField, Box, styled, ClickAwayListener } from "@mui/material";
import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { NoteState } from "../context/DataProvider";

const note = {
  id: "",
  title: "",
  text: "",
};

const Form = () => {
  const [showTitle, setShowTitle] = useState(false);
  const containerRef = useRef();
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const { notes, setNotes } = NoteState();

  const handleTextArea = () => {
    setShowTitle(true);
    containerRef.current.style.minHeight = "100px";
  };

  const clickAwayHandler = () => {
    setShowTitle(false);
    containerRef.current.style.minHeight = "30px";

    setAddNote({ ...note, id: uuid() });

    if (addNote.title || addNote.text) {
      setNotes((prevState) => [addNote, ...prevState]);
      console.log(notes);
    }
  };

  const onTextChange = (e) => {
    let newNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(newNote);
  };

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <Container ref={containerRef}>
        {showTitle && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            name="title"
            onChange={(e) => onTextChange(e)}
            value={addNote.title}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={handleTextArea}
          name="text"
          onChange={(e) => onTextChange(e)}
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;
export default Form;
