import React , {useState}from 'react'
import axios from 'axios';
import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(){
    const response = await axios.post('/login',{
      email: email,
      password: password,
    })
    if (response.data.status){
      // save user data in localStorage to access current user
       localStorage.setItem('currentUser',  JSON.stringify(response.data.data))
      alert("Login Successfully")
    }
    else{
      alert(response.data.message)
    }
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="signup-background">
        <div className="container">
          <div className="title-container">
            <h1 className="text-center">Login-Form</h1>
          </div>
          <div className="admin-login">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-boy mx-auto d-block"
                src={ImgLoginGirl}
                alt="workout"
                />

              </div>
              <div className="col-md-6">
                <form>

                  <div className="mt-4">
                    <input
                      type="email"
                      className="form-control"
                      id="userEmail"
                      placeholder="Enter Email"


                    />

                  </div>
                  <div className="mt-4">
                    <input
                      type="password"
                      className="form-control"
                      id="userPassword"
                      placeholder="Enter Password"

                    />
                  </div>

                  <div className="mb-4">
                    <button
                      type="button"
                      className="custom-btn  btn-lg btn-login mt-3">
                      Login
                    </button>
                  </div>
                  <h5 className="text-center mt-3">
                    {" "}
                    Dont have an account? <a href="./signup" className="login-anchor">Sign up</a>
                  </h5>
                </form> 
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
                  <button type="button" onClick={loginUser}>Log in</button>
                </div>
                <div className='acc-login'>
                  <p>Don't have an account? <a  className='acc-signup' href="/signup">Sign up</a></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;