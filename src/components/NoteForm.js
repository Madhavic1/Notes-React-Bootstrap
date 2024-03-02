import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NotesContext } from '../context/notesContext';
import { nanoid } from 'nanoid';
import FormComponent from './FormComponent';


function NoteForm() {
    const { noteText, setNoteText, setNotes, notes } = useContext(NotesContext);

    const handleNoteChange = (e) => {
        e.preventDefault();
        setNoteText(e.target.value)
    }

    const handleAddNoteClick = (e) => {
        e.preventDefault();
        setNotes([...notes, { text: noteText, id: nanoid() }]);
        setNoteText('')
    }

    return (
        <FormComponent label='Add Note' onChange={handleNoteChange} handleAddNoteClick={handleAddNoteClick} />
    )
}

export default NoteForm