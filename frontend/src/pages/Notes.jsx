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
    <div className='my-1 sm:grid grid-cols-2 gap-x-2 mx-auto lg:grid-cols-3 max-w-[64rem]'>
        {notes.map((note)=>(
          <NoteCard note={note}/>
        ))}
    </div>
  )
}
