import React, { useContext, useEffect, useState } from 'react';
import { NoteContext } from '../pages/Notes';

export function NoteEditModal({note, isOpen, onClose}) {
  
  const [title, setTitle] = useState(note?note.title : '');
  const [content, setContent] = useState(note?note.content : '');
  const [editMode, setEditMode] = useState(false);
  // if (note) {
  //   setEditMode(true);
  // } else  {
  //   setEditMode(false);
  // }
  // useEffect(() => {
  //   setTitle(note.title);
  //   setContent(note.content);
  // }, [editMode])

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleContentChange =(e) => {
    setContent(e.target.value);
  }
  const handleNoteUpdate = () => {
    e.preventDefault();

    onClose();
  };
  
  return (
    <div 
      className="hidden z-1 fixed left-0 top-0 h-screen w-screen overflow-y-hidden bg-[rgba(0,0,0,0.2)] pt-24"
      style={{display: isOpen? 'block': 'none'}}
      >
      <div className="m-auto max-w-md bg-base-200 p-5 text-base-content rounded-lg">
        <form onSubmit={handleNoteUpdate}>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="m-b-0 block w-full border-none bg-transparent p-0 font-bold outline-none" />
            
          <textarea
            rows={4}
            name="content"
            value={content}
            onChange={handleContentChange}
            className="min-h-20 m-0 block max-h-[50vh] w-full resize-none border-0 border-none border-current bg-transparent p-0 leading-normal outline-none"
          ></textarea>
          <button className="btn-sm btn">Save</button>
        </form>
      </div>
    </div>
  );
}
