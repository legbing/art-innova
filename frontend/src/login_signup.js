import React, { useState } from "react";
import axios from 'axios';

function Form() {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const login = (e) =>{
    const mail=e.target.email.value;
    const pass=e.target.password.value;
    const ut=e.target.dropdown.value;
   axios.post(
    "http://localhost:8000/form_login/",{
      email:mail,
      password:pass,
      usertype:ut
    }
   ).then((response)=>{
     console.log(response)
     alert('user logged in succesfully!')
   }).catch((err)=>{
    console.log(err)
   }
)

    e.preventDefault()
  }
  const signup = (e) =>{
    const name=e.target.text.value;
    const mail=e.target.email.value;
    const pass=e.target.password.value;
    const ut=e.target.dropdown.value;
    axios.post(
      "http://localhost:8000/form/",{
        name:name,
        email:mail,
        password:pass,
        usertype:ut
      }
     ).then((response)=>{
       console.log(response)
       alert('user signed up succesfully!')
     }).catch((err)=>{
      console.log(err)
     })
    e.preventDefault();
  }
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={login}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}&emsp;
              <span className="link-primary" onClick={changeAuthMode} style={{fontWeight:"bold"}}>
                Sign Up
              </span>
            </div><br/>
            <div className="form-group mt-3">
              <label>Email address</label><br/>
              <input
                type="email"
                name="email"
                placeholder="Enter email" style={{width:"100%",padding:"8px"}}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label><br/>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                style={{width:"100%",padding:"8px"}}
              />
            </div>
            <div  className="form-group mt-3">
            <label>User type</label><br/>
            <select aria-label="usertype" name="dropdown" style={{width:"106%",padding:"8px"}}>
            <option value="artist">Artist</option>
            <option value="customer">Customer</option>
            <option value="Gallery owner">Gallery owner</option>
            </select>
            </div>
            <br/>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" name="submitbtn"  style={{width:"106%",padding:"8px"}}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={signup}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}&emsp;
            <span className="link-primary" onClick={changeAuthMode} style={{fontWeight:"bold"}}>
              Sign In
            </span>
          </div><br/>
          <div className="form-group mt-3">
            <label>Full Name</label><br/>
            <input
              type="text"
              name="text"
              placeholder="e.g Jane Doe"
              style={{width:"100%",padding:"8px"}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label><br/>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{width:"100%",padding:"8px"}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label><br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={{width:"100%",padding:"8px"}}
            />
          </div>
          <label>User type</label><br/>
          <select aria-label="usertype" name="dropdown" style={{width:"106%",padding:"8px"}}>
            <option value="artist">Artist</option>
            <option value="customer">Customer</option>
            <option value="Gallery owner">Gallery owner</option>
            </select><br/><br/>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" name="submitbtn" style={{width:"106%",padding:"8px"}}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Form;
