import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { NotesContext } from '../context/notesContext';

function NoteForm() {
    const [noteText, setNoteText] = useState("");
    const {notes, setNotes} = useContext(NotesContext);
    const handleNoteChange = (e) => {
        console.log(e.target.value);
        setNoteText(e.target.value)
        
    }

    const handleAddNoteClick = (e) => {
        e.preventDefault();
        console.log('Submit Clicked ');
        console.log(noteText);
        console.log(notes);
        setNotes([...notes, noteText]);
        setNoteText('')
    }
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>New Note</Form.Label>
                    <Form.Control type="text" placeholder="Enter a new Text here .. " value={noteText} onChange={handleNoteChange}/>
                </Form.Group>
                <Button variant='primary' type='submit' onClick={handleAddNoteClick}>
                    Add Note
                </Button>
            </Form>
        </div>
    )
}

export default NoteForm