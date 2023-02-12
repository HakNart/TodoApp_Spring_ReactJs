import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { retrieveAllNotes } from '../api/NoteApiService';
import TextCard from '../components/TextCard';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    retrieveAllNotes()
      .then(res => res.json())
      .then(data => {
        setNotes(data);
      })
  }, [])

  return (
    <Container>
      <Grid container>
        {notes.map((note => (
          <TextCard key={note.id} note={note} />
        )))}
      </Grid>
    </Container>

  )
}
