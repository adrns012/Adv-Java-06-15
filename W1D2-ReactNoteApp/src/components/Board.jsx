import React, { useState } from "react";
import "./Board.css";
import Note from "./Notes";
function Board() {
  const [notes, setNotes] = useState([]);
  const addNote = () => {
    setNotes((arr) => [...arr, { id: Date.now() }]);
  };
 
  const handleDelete = (id) => {
    let arr = (arr) => arr.filter((note) => note.id !== id)
    setNotes(arr);
  };

  return (
    <div>
      <div className="div-board">
        <div className="row">
          {notes.map((note) => {
            return (
              <Note key={note.id} id={note.id} handleDelete={handleDelete} />
            );
          })}
        </div>
      </div>
      <div>
        <button className="btn btn-success add-button" onClick={addNote}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Board;
