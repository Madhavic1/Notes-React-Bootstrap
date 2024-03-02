import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NotesContext } from '../context/notesContext';

function FormComponent({ label, onChange, handleSaveClick, handleCancelClick, handleAddNoteClick }) {
    const { isEdit, noteText, editNoteText } = useContext(NotesContext);

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control type="text" placeholder="Enter a new Text here .. " value={isEdit ? editNoteText : noteText} onChange={onChange} />
                </Form.Group>
                {isEdit ?
                    <ButtonGroup>
                        <Button variant='primary' type='submit' onClick={handleSaveClick}>
                            Save
                        </Button>
                        <Button variant='primary' type='submit' onClick={handleCancelClick}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                    :
                    <Button variant='primary' type='submit' onClick={handleAddNoteClick}>
                        Add Note
                    </Button>
                }
            </Form>
        </div>
    )
}

export default FormComponent