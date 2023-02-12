import DeleteOutlineOutlinedIcon  from '@mui/icons-material/DeleteOutlineOutlined'
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'

export default function TextCard({note}) {
  return (
    <Card>
      <CardHeader 
        title={note.title}
        subheader={note.created_at}
        action={
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant='body2' color="text.secondary">
          {note.content}
        </Typography>
      </CardContent>
    </Card>
  )
}
