import React, {useEffect, useState} from 'react'
import "./Login.css"
import axios from 'axios';
import Workout from "./img/gymlogin.png";
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  async function loginHandler(e){
    e.preventDefault();
    if(
      email === "" ||
      password === ""
    )
    {
      alert("Please fill all the fields");
    } else {
      const response = await axios.post("http://localhost:5000/login", 
      {
        email: email,
        password: password,
      })
      if(response.data.status){
        alert("Login successfully")
      }
      else{
        alert("Login failed")
      }
    }
  }

  return (
    <>
      <div className="log-background">
        <div className="container">
          <div className="row">
          <h2 className="text-center login-heading mt-2">Login Form</h2>
            <div className="col-md-6">
              <img className="img-fluid mx-auto d-block mt-1 " src={Workout} alt="workout" />
            </div>

            <div className="col-md-6">
              <form className="mt-5">
                <div className="mb-4">
                  <label for="exampleInputEmail" className="form-label">Enter email address</label>
                  <input type="email" className="form-control" placeholder='example@gmail.com' id="exampleInputEmail1" 
                  value={email} onChange={(e) => setEmail(e.target.value)} />
            
                </div>
                <div className="mb-4">
                  <label for="exampleInputPassword" className="form-label">Enter password</label>
                  <input type="password" className="form-control" placeholder='Enter password' id="exampleInputPassword1" 
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                  
                </div>
                <div className='Forget-password'>
                  <a href="#">Forget password?</a>
                </div>
                <div>
                  <button onClick={loginHandler}>Log in</button>
                </div>
                <div className='acc-login'>
                  <p>Don't have an account? <a  className='acc-signup' href="/signup">Sign up</a></p>
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