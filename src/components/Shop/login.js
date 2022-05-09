import React from 'react'

const LoginC = () => {
  return (
    <div class="loginbox">
            <h1>Log in</h1>
            <p>Username</p>
            <input type="text" id="username" placeholder="Enter Username Here"/>
            <p>Password</p>
            <input type="password" id="password" placeholder="Enter Password"/><br/>
            <button id="loginbutton">Login</button><br/>
            <p class="error">Error. Please enter correct Username and Password.</p>
            <a href="#">Lost password?</a><br/>
            <a href="#">Don't have an account? Register here.</a>
        </div>
  )
}

export default LoginC