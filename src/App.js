import { useState } from "react";
import NoteForm from "./components/NoteForm";
import RenderNotesList from "./components/RenderNotesList";
import { NotesContext } from "./context/notesContext";

const notesList = [
  {
    'id': '1',
    'text': 'Note1'
  },
  {
    'id': '2',
    'text': 'Note2'
  },
  {
    'id': '3',
    'text': 'Note3'
  }
];

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="App">
      <NotesContext.Provider value={{notes, setNotes, notesList}}>
        <NoteForm />
        <RenderNotesList />
      </NotesContext.Provider>

    </div>
  );
}

export default App;
