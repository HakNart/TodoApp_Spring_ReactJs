import React, { useEffect, useState } from 'react'
import { retrieveAllNotes } from '../api/NoteApiService'
import NoteCard from '../components/NoteCard';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(()=>{
    retrieveAllNotes()
    .then(res => res.json())
    .then(data => {
      setNotes(data);
    })
  },[])
  return (
    <div>
        {notes.map((note)=>(
          <NoteCard note={note}/>
        ))}
    </div>
  )
}
