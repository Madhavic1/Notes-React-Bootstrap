import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NotesContext } from '../context/notesContext';
import FormComponent from './FormComponent';

function EditNoteForm() {
    const { setIsEdit, editNote, notes, setNotes, editNoteText, setEditNoteText } = useContext(NotesContext);

    useEffect(()=>{
        setEditNoteText(editNote.text)
    }, [editNote, setEditNoteText]);

    const handleEditNoteChange = (e) => {
        e.preventDefault();
        setEditNoteText(e.target.value)
    }

    const handleSaveClick = (e) => {
        e.preventDefault();
            const modifiedNotes= notes.map( note => {
            if(note.id === editNote.id){
                return {...note, text: editNoteText}
            } 
            return note
        });
        setNotes(modifiedNotes);
        setEditNoteText('')
        setIsEdit(false);
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        setIsEdit(false);
        setEditNoteText('');
        
    }

    return (
        <FormComponent label='Edit Note' onChange={handleEditNoteChange}
        handleSaveClick={handleSaveClick} handleCancelClick={handleCancelClick}/>
    )
}
export default EditNoteForm