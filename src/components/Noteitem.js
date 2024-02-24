import React,{ useContext } from "react";
import noteContext from "../context/notes/notecontext";

const Noteitem =(props) => {
    const context = useContext(noteContext);
    const { notes,deleteNote,editNote } = context;
  const { note,updateNote,showAlert } = props;
  return (
    <>
    <div className="col-md-3"> 
      <div className="card my-3" style={{backgroundColor:'#245B47',color:'white'}}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} </p>
          <p className="card-text">{note.tag} </p>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);showAlert("success","Deleted successfully")}}></i>
        </div>
      </div>
    </div>
    </>
  );
}
export default Noteitem;
