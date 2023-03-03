import React, { useContext, useState } from 'react';
import { createNewNote, updateNoteApi } from '../api/NoteApiService';
import { NoteContext } from '../pages/Notes';

export function CreateNoteForm({submitNote, onNewNoteCreate}) {
  const [isFormExpanded, setFormExpanded] = useState(false);
  const [isCheckListForm, setCheckListForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {refreshNotes} = useContext(NoteContext);

  const toggleForm = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFormExpanded(!isFormExpanded);
      setCheckListForm(false);
    }
  };

  const changeNoteType = (e) => {
    setCheckListForm(!isCheckListForm);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleContentChange =(e) => {
    setContent(e.target.value);
  }

  const onNoteCreate = (e) => {
    e.preventDefault();
    console.log(refreshNotes);
    const note = {
      title: title,
      type: 'text',
      username: 'bob',
      "createdAt": (new Date()).toJSON(),
      content: content,
    }
    console.log(note);
    onNewNoteCreate(note)
    submitNote();
  }


  return (
    <section className='create-form'>

      <form className='create-note shadow-sm relative w-full max-w-[37rem] mx-auto my-0 p-5 bg-base-200 rounded-lg' onFocus={toggleForm} onBlur={toggleForm} onSubmit={onNoteCreate}>
        
        <input type="text" name='title' placeholder='Title' className="w-full font-bold block border-none outline-none m-b-0 p-0 bg-transparent" onChange={handleTitleChange}  />

        <textarea rows={4} className="block bg-transparent w-full resize-none leading-normal min-h-20 max-h-[50vh] border-0 border-current border-none outline-none m-0 p-0 " name="content" placeholder='Take note...' onChange={handleContentChange} value={content}></textarea>
        <button className='btn btn-success btn-sm'>Add</button>

      </form>
    </section>
  );
}
