import NoteContext from "./notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // adding a getnotes function
  const getNotes =async() => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json)
    setNotes(json)
  }

  const addNote = async(title, description, tag) => {
    
    // api call server side add
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    
    // client-side add
    setNotes(notes.concat(json));
    
// console.log("Adding a new note");
    // const note = {
    //   _id: "65b69JHJGHdsffdeegjhmjmjmmgg4fd3442b309066ee",
    //   user: "65aaa0132c9ae2e7ff33d1aa",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "1706464817458",
    //   __v: 0,
    // };
  };

  const editNote = async (id, title, description, tag) => {
    
    // api call for server side edit
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    
    // client-side edit
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      setNotes(newNotes);
    }
  };
  const deleteNote = async (id) => {
    
    // API call to delete from backend
    const response = await fetch(`${host}/api/notes/deletenode/${id}`,{
      method:'DELETE',
      headers:{
        'Content-type':'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    const json = response.json();
    console.log(json);

    // Delete from client-side
    console.log("Deleting the node with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, editNote, deleteNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
