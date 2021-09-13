import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Cards = ({ key, id, title, content, del }) => {

    const deleteEvent = () => {
        del(id)
    }

    return (
        <>
            <div className='card' key={key} id={id}>
                <h1>{title}</h1>
                <br />
                <p>{content}</p><br />
                <DeleteOutlineIcon className='delete' onClick={deleteEvent} />
            </div>
        </>
    )
}

export default Cards
