import React, { createRef, useState } from "react";
import "./Note.css";

function Notes(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [state, setstate] = useState([]);
 
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    let newObj = {
      title: title,
      body: body,
    };
    setEditMode(false);
    setstate(newObj);
  };
  const handleDeleteById = () => {
    props.handleDelete(props.id);
  };

  let titleElement, bodyElement, buttonArea;
  if (editMode) {
    titleElement = (
      <textarea
        onChange={(e) => setTitle(e.target.value)}
        className="title-textarea"
        defaultValue={title}
      ></textarea>
    );
    bodyElement = (
      <textarea
        onChange={(e) => setBody(e.target.value)}
        className="body-textarea"
        defaultValue={body}
      ></textarea>
    );
    buttonArea = (
      <div>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    );
  } else {
    titleElement = <h5 className="card-title">{title}</h5>;
    bodyElement = <p>{body}</p>;
    buttonArea = (
      <div>
        <button className="btn btn-info" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDeleteById}>
          Delete
        </button>
      </div>
    );
  }
  return (
    <div className="col-sm-6">
      <div className="card card-view">
        <div className="card-body">
          {titleElement}
          {bodyElement}
          {buttonArea}
        </div>
      </div>
    </div>
  );
}


export default Notes;
