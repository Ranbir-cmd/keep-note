import { useContext } from "react";
import { createContext, useState } from "react";

const NoteContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  localStorage.setItem("allNote", notes);
  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deletedNotes,
        setDeletedNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const NoteState = () => {
  return useContext(NoteContext);
};

export default DataProvider;
