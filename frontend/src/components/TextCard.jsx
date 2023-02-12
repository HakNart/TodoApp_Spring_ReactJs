import DeleteOutlineOutlinedIcon  from '@mui/icons-material/DeleteOutlineOutlined'
import { Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
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
        {/* Render text content */}
        {note.type == "text" && (
          <Typography variant="body2" color="text.secondary">
            {note.content}
          </Typography>
        )}
        {/* Render checklist content */}
        {note.type == "checklist" && (
          <List>
            {note.items.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
}
