import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='loginbox'>
    <h1>Login Page</h1>
  <button onClick={() => loginWithRedirect()} id="loginbutton">Login</button>
  </div>
  )
}

export default LoginButton