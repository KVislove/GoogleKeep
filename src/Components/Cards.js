import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Cards = (props) => {


    const deleteEvent = () => {
        props.del(props.id)
    }

    return (
        <>
            <div className='card' key={props.id} id={props.id}>
                <h1 style={{ marginLeft: '10px', marginBottom: '0px', height: '36px', overflowX: 'hidden' }}>{props.title}</h1>
                <br />
                <div style={{ overflow: 'auto', height: "96px" }}>
                    <p style={{ marginLeft: '10px', marginTop: '0px' }}>{props.content}</p><br />
                </div>
                <DeleteOutlineIcon className='delete' onClick={deleteEvent} />
            </div>
        </>
    )
}

export default Cards
