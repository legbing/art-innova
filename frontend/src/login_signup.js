import React, { useState } from "react"

function Form() {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
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
                className="form-control mt-1"
                placeholder="Enter email" style={{width:"100%",padding:"8px"}}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label><br/>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                style={{width:"100%",padding:"8px"}}
              />
            </div><br/>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" style={{width:"106%",padding:"8px"}}>
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
      <form className="Auth-form">
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
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              style={{width:"100%",padding:"8px"}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label><br/>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              style={{width:"100%",padding:"8px"}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label><br/>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              style={{width:"100%",padding:"8px"}}
            />
          </div>
          <br/>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" style={{width:"106%",padding:"8px"}}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Form;