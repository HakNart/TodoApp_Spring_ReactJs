import React, { useContext, useState } from 'react';
import { NoteContext } from './Notes';

export function NoteEditModal() {
  const { selectedNote, toggleNoteEdit, setToggleNoteEdit } = useContext(NoteContext);
  const [displayModal, setDisplayModal] = useState(null);
  if (toggleNoteEdit) {
    setDisplayModal({ display: 'block' });
  }
  const handleNoteUpdate = () => {
    e.preventDefault();
    setDisplayModal({ display: 'hidden' });
    setToggleNoteEdit(false);
  };
  if (selectedNote == null) {
    return <div></div>;
  }
  return (
    <div className="block z-1 fixed left-0 top-0 h-screen w-screen overflow-y-hidden bg-[rgba(0,0,0,0.2)] pt-24">
      <div className="m-auto max-w-md bg-base-200 p-5 text-base-content rounded-lg">
        <form onSubmit={handleNoteUpdate}>
          <input
            type="text"
            value={selectedNote.title}
            className="m-b-0 block w-full border-none bg-transparent p-0 font-bold outline-none" />
          <textarea
            rows={3}
            name="content"
            value={selectedNote.content}
            className="min-h-20 m-0 block max-h-[50vh] w-full resize-none border-0 border-none border-current bg-transparent p-0 leading-normal outline-none"
          ></textarea>
          <button className="btn-sm btn">Save</button>
        </form>
      </div>
    </div>
  );
}
