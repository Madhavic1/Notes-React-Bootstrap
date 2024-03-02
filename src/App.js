import { useState } from "react";
import NoteForm from "./components/NoteForm";
import RenderNotesList from "./components/RenderNotesList";
import { NotesContext } from "./context/notesContext";
import EditNoteForm from "./components/EditNoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [editNote, setEditNote] = useState(null);
  const [editNoteText, setEditNoteText] = useState("");

  
  return (
    <div className="App">
      <NotesContext.Provider value={{notes, setNotes, isEdit, setIsEdit, noteText, setNoteText, editNote, setEditNote, editNoteText, setEditNoteText}}>
      {!isEdit ? <NoteForm /> : <EditNoteForm />}
        <RenderNotesList />
      </NotesContext.Provider>

    </div>
  );
}

export default App;
