import "./Login.css";
import ImgLoginGirl from "./img/login-girl.png";





function Login() {

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
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;