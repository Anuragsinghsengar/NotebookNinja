import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
var cors = require('cors');


function App() {
  const [ alert,setAlert ] = useState(null);
  const showAlert = (type,message)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  return (
    <>
    <div className="box" style={{backgroundColor:'#603A28',width:'100vw',backgroundColor:'#603A28',minHeight:'100vh'}}>
<NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path ="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path ="/about" element={<About/>} />
          <Route exact path ="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path ="/signup" element={<SignUp showAlert={showAlert}/>} />
        </Routes>
      </Router>
    </NoteState>
    </div>
    </>
  );
}

export default App;
