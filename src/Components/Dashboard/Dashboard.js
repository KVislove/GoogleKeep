import React, { useEffect, useState } from 'react'
import Cards from './../Cards';
import CreateNote from './../CreateNote';
import Footer from './../Footer';
import Header from './../Header';
import { Service } from './../../Services/Service';
import { KvLocalStorage } from '../../Utils/KvLocalStorage';

const Dashboard=()=>{

  const [notes, setNotes] = useState([])

  useEffect(()=>{
    fetchNotes()
  },[])

  const addNote = (note) => {
    let userInfo=KvLocalStorage.getUserInfo();
    Service.insertNote(note, userInfo.userId).then(data=>{
      console.log(data.data);
      fetchNotes()
    }).catch(err=>{
      console.log(err)
    })
  }

  const deleteNote = (noteId) => {
    let userInfo=KvLocalStorage.getUserInfo();
    Service.deleteNote(noteId,userInfo.userId).then(data=>{
      console.log(data.data)
      fetchNotes()
    }).catch(error=>{
      console.log(error)
    })
  }

  const fetchNotes=()=>{
    let userInfo=KvLocalStorage.getUserInfo();
    Service.fetchNotes(userInfo.userId).then(data=>{
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

export default Dashboard;
