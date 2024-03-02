import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { NotesContext } from '../context/notesContext';


function RenderNotesList() {
    const { notes, setNotes, setIsEdit, setEditNote } = useContext(NotesContext);

    const handleEdit = (id) => {
        setIsEdit(true);
        const editNote = notes.find(note => note.id === id);
        setEditNote(editNote);
    }

    const handleDelete = (id) => {
        const filteredArray = notes.filter(note => note.id !== id);
        setNotes(filteredArray)
    }
    
    return (
        notes.length > 0 ? <div>
            <Card className='mx-auto' style={{ width: '50%' }} >
                <Card.Body>
                    <Card.Title>List of Notes</Card.Title>
                    <ListGroup>
                        {notes.map(note => <ListGroup.Item key={note.id} className='d-flex justify-content-between align-items-start'>
                            {note.text}
                            <div>
                                <MdEdit onClick={() => handleEdit(note.id)} />
                                <RiDeleteBinFill onClick={() => handleDelete(note.id)} />
                            </div>
                        </ListGroup.Item>)}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div> : null
    )
}

export default RenderNotesList