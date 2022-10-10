import React , {useEffect, useState}from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

import Workout from "./img/gymlogin.png";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  async function loginUser(e){
    e.preventDefault();
    if(
      email === "" || 
      password === ""
    )
    {
      alert("Please fill all the fields");
    }
    else{
      const response = await axios.post('/login',
      {
        email: email,
        password: password,
      })
      if(response.data.status)
      {
        alert("Login Successfully")
        navigate('/home')
      }
      else{
        alert("Invalid Credentials")
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
                  <label for="InputEmail" className="form-label">Enter email address</label>
                  <input type="email" className="form-control" placeholder='example@gmail.com' id="InputEmail"
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                  <label for="InputPassword" className="form-label">Enter password</label>
                  <input type="password" className="form-control" placeholder='Enter password' id="InputPassword" 
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='Forget-password'>
                  <a href="#">Forget password?</a>
                </div>
                <div>
                  <button onClick={loginUser}>Log in</button>
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

  );
  }


export default Login