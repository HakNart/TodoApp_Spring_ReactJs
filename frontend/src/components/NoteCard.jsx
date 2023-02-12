import React from "react";

export default function NoteCard({ note }) {
  return (
    <div className="card card-compact w-96 bg-base-200 text-base-content border border-base-300">
        <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            {note.type == "text" && 
                <p>{note.content}</p>
            }
            {note.type == "checklist" && 
                <ul >
                    {note.items.map(item => (
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start">
                                <input type="checkbox" className="checkbox checkbox-success"/>
                                <span className="label-text pl-1">{item.text}</span>
                                
                            </label>
                        </div>
                    ))}
                </ul>
            } 
        </div>
    </div>
  );
}
