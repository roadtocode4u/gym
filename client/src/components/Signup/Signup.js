import React, {useState} from "react";
import "./Signup.css";
import axios from 'axios'
import Workoutimg from "./img/Signupworkoutimg.png";

function Signup() {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");

async function addUser()
{
  await axios.post('/signup',{
    fullName: fullName,
    email: email,
    phone: phone,
    password: password,
  })

    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");

    alert("user added successfully")
}
 
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
                    placeholder="Enter Fullname"
                    value={fullName} onChange={(e)=>{setFullName(e.target.value)}}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Email"
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPhone"
                    placeholder="Enter Phone Number"
                    value={phone} onChange={(e)=>{setPhone(e.target.value)}}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                    value={password} onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>
                <button type="button" className="sign-up-btn w-100" onClick={addUser}>
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
