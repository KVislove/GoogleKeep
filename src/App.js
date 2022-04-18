import React, { useEffect, useState } from 'react'
import Cards from './Components/Cards';
import CreateNote from './Components/CreateNote';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Service } from './Components/Service';

function App() {

  const [notes, setNotes] = useState([])

  useEffect(()=>{
    fetchNotes()
  },[])

  const addNote = (note) => {
    Service.insertNote(note).then(data=>{
      console.log(data.data);
      fetchNotes()
    }).catch(err=>{
      console.log(err)
    })
  }

  const deleteNote = (id) => {
    Service.deleteNote(id).then(data=>{
      console.log(data.data)
      fetchNotes()
    }).catch(error=>{
      console.log(error)
    })
  }

  const fetchNotes=()=>{
    Service.fetchNotes().then(data=>{
      setNotes(data.data)
    }).catch(error=>{
      console.log(error)
    })
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {notes.length !== 0 && <div className='cards'>
        {
          notes.map((val) => {
            return <Cards key={val.id} id={val.id} title={val.title} content={val.content} del={deleteNote} />
          })
        }
      </div>}
      <Footer />
    </>
  );
}

export default App;
