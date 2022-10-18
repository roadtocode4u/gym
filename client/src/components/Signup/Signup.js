import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImgSignupMan from "./img/gym-master-signup.png";
import ImgSignupGirl from "./img/gym-master-signup1.png";

const headerImage = Math.floor(Math.random() * 2) ?
ImgSignupMan : ImgSignupGirl ;

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  async function addUser() {
    const response = await axios.post("/signup", {
      fullName: fullName,
      email: email,
      phone: phone,
      password: password,
    });

    if (response.data.success) {
      alert("Signup Successfull");
      navigate("/login");
    } else {
      alert(response.data.message);
    }
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
  }

  return (
  <>
    <div className="signup-background">
      <div className="container">
        <div className="title-container">
          <h1 className="text-center">Sign-Up</h1>
        </div>
        <div className="admin-signup">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="userFullName"
                    placeholder="Enter FullName"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>

                <div className="mt-4">
                  <input
                    type="email"
                    className="form-control"
                    id="userEmail"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    className="form-control"
                    id="userPhoneNumber"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    className="form-control"
                    id="userPassword"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <button
                    type="button"
                    className="signup-btn  btn-lg btn-signup mt-3 w-100"
                    onClick={addUser}
                  >
                    SignUp
                  </button>
                </div>
                <h5 className="text-center mt-3">
                  {" "}
                  Already a member? <a href="./login" className="login-anchor">Log In</a>
                </h5>
              </form>
            </div>

            <div className="col-md-6">
              <img
                className="img-fluid mx-auto d-block"
                src={headerImage}
                alt="workout"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Signup;