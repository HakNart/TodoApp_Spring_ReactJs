import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { retrieveAllNotes } from '../api/NoteApiService';

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
          note.title
        )))}
      </Grid>
    </Container>

  )
}
