import React, { useState } from 'react';
import { createNewNote } from '../api/NoteApiService';

export function CreateNoteForm() {
  const [isFormExpanded, setFormExpanded] = useState(false);
  const [isCheckListForm, setCheckListForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

  const handleSubmit = (e) => {
    const note = {
      title: title,
      content: content,
    }
    createNewNote(note)
      .then((res) => res.json())
      .then((data) => {
        console.log("Sucess:", data)
      })
      .catch(err => {
        console.log('Error:', err);
      })
  }

  return (
    <section className='create-form'>

      <form className='create-note shadow-sm relative w-full max-w-[37rem] mx-auto my-0 p-5 bg-base-200 rounded-lg z-10' onFocus={toggleForm} onBlur={toggleForm} onSubmit={handleSubmit}>
        {/* <div className="form-control">
          <label className="label cursor-pointer justify-end">
            <span className="label-text">Checklist</span>
            <input type="checkbox" className="toggle toggle-success toggle-sm ml-2" checked={isCheckListForm} onChange={changeNoteType} />
          </label>
        </div> */}
        <input type="text" name='title' placeholder='Title' className="w-full font-bold block border-none outline-none m-b-0 p-0 bg-transparent" onChange={handleTitleChange}  />

        <textarea className="block bg-transparent w-full resize-none leading-normal min-h-20 max-h-[50vh] border-0 border-current border-none outline-none m-0 p-0 " name="content" placeholder='Take note...' onChange={handleContentChange} value={content}></textarea>
        <button className='btn btn-success btn-sm'>Add</button>

      </form>
    </section>
  );
}
