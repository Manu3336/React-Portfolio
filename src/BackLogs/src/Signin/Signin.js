import React from 'react';
import './Signin.css';
import './main.css';

const signin = () => {
    return (
    <div className="body">
    <div className="form-signin">
    <div className="text-center mb-4">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <p for="inputEmail" class="sr-only">Email address</p>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
      <div class="checkbox mb-3">
        <p>
          <input type="checkbox" value="remember-me"/> Remember me
        </p>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </div>
    </div>

        </div>
  
    )
}

export default signin;