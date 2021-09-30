import React, { useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const changeEvent = (event) => {
        const { name, value } = event.target
        setNote((prevNote) => {
            return (
                {
                    ...prevNote,
                    [name]: value
                }
            )
        })
    }

    const addEvent = () => {
        if (note.title === '' && note.content === '') {
            alert("Please write something first")
        }
        else {
            props.passNote(note)

            setNote((prevNote) => {
                return (
                    {
                        title: '',
                        content: ''
                    }
                )
            })
        }

    }

    return (
        <>
            <div className='createnote'>
                <input type='text' onChange={changeEvent} name='title' autoComplete='off' value={note.title} className='text' placeholder='Title' />
                <textarea onChange={changeEvent} name='content' value={note.content} className='textarea' placeholder='write a note...' />
                <button className='btn' onClick={addEvent}>
                    <AddCircleIcon />
                </button>
            </div>
        </>
    )
}

export default CreateNote