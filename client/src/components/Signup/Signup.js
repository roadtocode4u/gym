import React from "react";
import "./Signup.css";
import Workoutimg from "./img/Signupworkoutimg.png";

function Signup() {
  return (
    <>
      <div className="sighup-background">
        <div className="container">
          <div className="row">
          <h2 className="text-center sign-heading mt-2">Sign-Up Form</h2>
            <div className="col-md-6">   
              <form>
                <div className="mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFullName"
                    placeholder="enter your fullname"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="enter your mail"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPhone"
                    placeholder="enter your phone number"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="enter your password"
                  />
                </div>
                <div className="mt-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="sign-up-btn w-100">
                  Signup
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid mx-auto d-block"
                src={Workoutimg}
                alt="workout"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
