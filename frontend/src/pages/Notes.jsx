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
    <div className='notes grid sm grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5 relative mx-auto my-12 ' >
        {notes.map((note)=>(
          <NoteCard note={note}/>
        ))}
    </div>
  )
}
