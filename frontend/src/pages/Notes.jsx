import React, { createContext, useEffect, useState } from 'react'
import { retrieveAllNotes } from '../api/NoteApiService'
import { CreateNoteForm } from '../components/CreateNoteForm';
import NoteCard from '../components/NoteCard';
import { NoteEditModal } from '../components/NoteEditModal';

export const NoteContext = createContext(null);
export default function Notes() {
  const [notes, setNotes] = useState([]);
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
  
  
  const [selectedNote, setSelectedNote] = useState(null);

  // const toggleEditOn = (note) => {
    
  //   setSelectedNote(note);
  //   setEditMode(true);
    
  // }
  // const toggleEditOff = () => {
  //   setEditMode(false);
  // }
  
  // const refreshNotes = () => {
  //   setUpdated(true);
  // }
  const handleEdit = (index) => {
    console.log("Selected note", index);
    console.log(notes);
    setSelectedNote(notes[index])
    
  }
  return (
    <NoteContext.Provider value={{}}>
      <div className='note-app'>
        <CreateNoteForm />
        <div className='notes grid sm grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5 relative mx-auto my-12 ' >
          {([...notes].reverse()).map((note, index)=>(
            <NoteCard note={note} key={index} onEdit={()=>handleEdit(index)}/>
          ))}
        </div>
        <NoteEditModal note={selectedNote} isOpen={selectedNote !== null} onClose={()=> setSelectedNote(null)}/>
        

      </div>
    </NoteContext.Provider>
    
  )
}

