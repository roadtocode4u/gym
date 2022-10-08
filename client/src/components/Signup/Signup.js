import React from "react";
import "./Signup.css";
import Workoutimg from "./img/Signupworkoutimg.png";

function Signup() {
  return (
    <>
      <div className="sighup-background">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-center mt-2">Sign-Up Form</h2>
              <form className="mt-3">
                <div className="mb-3">
                  <label for="exampleInputFullName" className="form-label">
                    Enter Your FullName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFullName"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPhone" className="form-label">
                    Enter Your Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPhone"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid mx-auto d-block mt-4 "
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
