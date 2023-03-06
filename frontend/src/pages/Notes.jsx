import React, { createContext, useEffect, useState } from 'react'
import { createNewNote, deleteNoteApi, retrieveAllNotes, updateNoteApi } from '../api/NoteApiService'
import { CreateNoteForm } from '../components/CreateNoteForm';
import NoteCard from '../components/NoteCard';
import { NoteEditModal } from '../components/NoteEditModal';
import { useAuth } from '../security/AuthContext';

export const NoteContext = createContext(null);
export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [isUpdated, setUpdated] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const authContext = useAuth();
  const userName = authContext.username;
  useEffect(()=>{
    retrieveAllNotes(userName)
    .then(res => res.json())
    .then(data => {
      // Set notes in reverse order
      setNotes([...data].reverse());
    })
    setUpdated(false);
  },[isUpdated])
  
  
  const refreshNotes = () => {
    setUpdated(true);
  }
  const handleEdit = (index) => {
    setSelectedNote(index)
  }
  const onNoteUpdate = (id, note) => {
    updateNoteApi(userName,id, note)
      .then((res) => res.json())
      .then((data) => {
        console.log("Sucess:", data)
      })
      .catch(err => {
        console.log('Error:', err);
      })
  }
  const onNoteDelete = (id) => {
    deleteNoteApi(userName,id)
      .then(res => res.json())
      .then(() => {
        console.log("Success: Note", id, "was deleted")
        setUpdated(true);
      })
      .catch(err => {
        console.log('Error', err);
      })
  }
  
  const onNewNoteCreate = (note) => {
    console.log("Note Component-on New Note Created");
    console.log(note);
    createNewNote(userName, note)
      .then((res) => res.json())
      .then((data) => {
        console.log("Sucess:", data)
      })
      .catch(err => {
        console.log('Error:', err);
      })
  }
  return (
    <NoteContext.Provider value={{}}>
      <div className='note-app'>
        <CreateNoteForm submitNote={()=>refreshNotes()} onNewNoteCreate={onNewNoteCreate}/>
        <div className='notes grid sm grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5 relative mx-auto my-12 ' >
          {(notes).map((note, index)=>(
            <NoteCard note={note} key={index} onEdit={()=>handleEdit(index)}/>
          ))}
        </div>
        <NoteEditModal key={selectedNote} note={notes[selectedNote]} isOpen={selectedNote !== null} onClose={()=> setSelectedNote(null)} onUpdate={onNoteUpdate} onDelete={onNoteDelete}/>
        

      </div>
    </NoteContext.Provider>
    
  )
}

