import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { NotesContext } from '../context/notesContext';


function RenderNotesList() {
    const {notes} = useContext(NotesContext);
    console.log(notes);
    return (
        <div>
            <Card className='mx-auto' style={{ width: '50%' }} >
                <Card.Body>
                    <Card.Title>List of Notes</Card.Title>
                    <ListGroup>
                        {notes.map((note, index) => <ListGroup.Item key={index} className='d-flex justify-content-between align-items-start'>
                            {note}
                            <div>
                                <MdEdit />
                                <RiDeleteBinFill />
                            </div>
                        </ListGroup.Item>)}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RenderNotesList