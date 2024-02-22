import React, { useContext, useState } from "react";
import noteContext from "../context/notes/notecontext";

function AddNote(props) {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" })
    props.showAlert("success","Added successfully")
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="emailHelp"
              value={note.title}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="descripton"
              name="description"
              value={note.description}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              name="tag"
              id="tag"
              aria-describedby="emailHelp"
              value={note.tag}
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
            disabled = { note.title.length <5 || note.description.length <5 || note.tag.length <5}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNote;
