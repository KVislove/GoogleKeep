import React, { useState } from 'react'
import Cards from './Components/Cards';
import CreateNote from './Components/CreateNote';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return (
        [...prevNotes, note]
      )
    })
  }

  const deleteNote = ({ id }) => {
    setNotes((prevNotes) => {
      prevNotes.filter((currnote, index) => {
        return index !== id
      })
    })
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className='cards'>
        {
          notes.map((val, index) => {
            return <Cards key={index} id={index} title={val.title} content={val.content} del={deleteNote} />
          })
        }
      </div>
      <Footer />
    </>
  );
}

export default App;
