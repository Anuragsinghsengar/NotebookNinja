import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    if (json.authtoken) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("success", "Sign up completed");
    } else {
      props.showAlert("danger", "Invalid credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-2" style={{color:'white'}}>
        <h3 className="my-3">Create a account to use the services of NoteBook Ninja</h3>
        <form onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
             <h6>Name</h6>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={onChange}
              style={{backgroundColor:'#FFBE98'}}
              />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <h6> Email address</h6>
            </label>
            <input
              type="email"
              style={{backgroundColor:'#FFBE98'}}
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
              />
            <div id="emailHelp" className="form-text" style={{color:'white'}}>
               We'll never share your email with anyone else.
                           </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <h6>  Password</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              style={{backgroundColor:'#FFBE98'}}
              name="password"
              aria-describedby="emailHelp"
              onChange={onChange}
              />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              <h6>Repeat Password</h6>
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              name="cpassword"
              onChange={onChange}
              style={{backgroundColor:'#FFBE98'}}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
