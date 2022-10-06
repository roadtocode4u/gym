import React from 'react'
import "./Login.css"

import Workout from "./img/gymlogin.png";

function Login() {
  return (
    <>
      <div className="log-background">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="img-fluid mx-auto d-block mt-1 " src={Workout} alt="workout" />
            </div>

            <div className="col-md-6">
              <h2 className="text-center mt-5">Login Form</h2>
              <form className="mt-4">
                <div className="mb-4">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" placeholder='example@gmail.com' id="exampleInputEmail1" />
                </div>
                <div className="mb-4">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder='Enter password' id="exampleInputPassword1" />
                </div>
                <div>
                  <a href="#">Forget password</a>
                </div>
                <div>
                  <button type="submit">Log in</button>
                </div>
                <div>
                  <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Login