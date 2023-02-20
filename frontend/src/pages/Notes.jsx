import React, { createContext, useEffect, useState } from 'react'
import { retrieveAllNotes } from '../api/NoteApiService'
import { CreateNoteForm } from '../components/CreateNoteForm';
import NoteCard from '../components/NoteCard';
import { NoteEditModal } from './NoteEditModal';

export const NoteContext = createContext(null);
export default function Notes() {
  const [isUpdated, setUpdated] = useState(false);
  const [editMode, setEditMode] = useState(false);
  useEffect(()=>{
    retrieveAllNotes()
    .then(res => res.json())
    .then(data => {
      setNotes(data);
    })
    setUpdated(false);
  },[isUpdated])
  const [notes, setNotes] = useState([]);
  
  const [selectedNote, setSelectedNote] = useState(null);

  const toggleEditOn = (note) => {
    
    setSelectedNote(note);
    setEditMode(true);
    
  }
  const toggleEditOff = () => {
    setEditMode(false);
  }
  
  const refreshNotes = () => {
    setUpdated(true);
  }
  return (
    <NoteContext.Provider value={{selectedNote, setSelectedNote, toggleEditOn, toggleEditOff ,refreshNotes}}>
      <div className='note-app'>
        <CreateNoteForm />
        <div className='notes grid sm grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5 relative mx-auto my-12 ' >
          {notes.map((note)=>(
            <NoteCard note={note} key={note.id} />
          ))}
        </div>
        <NoteEditModal note={selectedNote} editMode={editMode}/>
        

      </div>
    </NoteContext.Provider>
    
  )
}

