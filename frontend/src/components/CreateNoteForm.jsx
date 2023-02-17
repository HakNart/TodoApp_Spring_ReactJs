import React, { useState } from 'react';

export function CreateNoteForm() {
  const [isFormExpanded, setFormExpanded] = useState(false);
  const [isCheckListForm, setCheckListForm] = useState(false);
  const toggleForm = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFormExpanded(!isFormExpanded);
      setCheckListForm(false);
    }
  };

  const changeNoteType = (e) => {
    setCheckListForm(!isCheckListForm);
  };

  return (
    <div className='create-form'>

      <form className='create-note shadow-sm relative w-full max-w-[37rem] mx-auto my-0 p-5 bg-base-200 rounded-lg z-10' onFocus={toggleForm} onBlur={toggleForm}>
        <div className="form-control">
          <label className="label cursor-pointer justify-end">
            <span className="label-text">Checklist</span>
            <input type="checkbox" className="toggle toggle-success toggle-sm ml-2" checked={isCheckListForm} onChange={changeNoteType} />
          </label>
        </div>
        <input name='title' placeholder='Title' className="w-full font-bold block border-none outline-none m-b-0 p-0 bg-transparent"></input>

        <textarea className="block bg-transparent w-full resize-none leading-normal min-h-20 max-h-[50vh] border-0 border-current border-none outline-none m-0 p-0 " name="content" placeholder='Take note...'></textarea>
        <button className='btn btn-success btn-sm'>Add</button>

      </form>
    </div>
  );
}
