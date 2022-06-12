import React from 'react'

const Login = () => {
  return (
    <>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Login</h2>
          </div>
          <form className="php-email-form">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate" />
              </div>
              <div className="col-md-8 form-group">
                <input type="password" name="password" className="form-control" id="password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter password" autoComplete="off"/>
                <div className="validate" />
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Login</button>
            </div>
            <div className="row text-center">
              <h6>Or</h6>
              <div className="col-md-12">
                <button type="submit" style={{ backgroundColor: 'white', color: 'black', border: '1px solid' }}>
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> Sigin Using Google
                </button>
              </div>
            </div>
            <div className="text-center">
              <div>
                <p className="d-inline mt-2">Create a new account: </p>
                <button type="button" className="btn btn-link">Signup</button>
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-link">Forgot Password?</button>
            </div>
          </form>
        </div>
      </section>

    </>
  )
}

export default Login