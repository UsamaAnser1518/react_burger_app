import React from 'react';
import './LoginForm.css'

function LoginForm() {
  return (
    <div className='login'>
      <div className="card col-12 col-lg-4 login-card">
        <h1>Login Form</h1>
        <form>
          <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
              />
          </div>
          <button
              type="submit"
              className="btn btn-primary">
              Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

