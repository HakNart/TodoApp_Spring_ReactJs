import React from "react";

export default function NoteCard({ note }) {
  return (
    <div className='card w-full max-w-[420px] mx-auto bg-base-200 text-base-content'>
        <div className="card-body">
            <div className="flex justify-between">
                <h2 className="card-title">{note.title}</h2>
                <div>
                    <button className="btn btn-sm btn-accent">Delete</button>
                    <button className="btn btn-sm btm-secondar">Edit</button>
                </div>
                
            </div>
            
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
