import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from '../../components/Shop/profile'
import Navbar from '../../components/Shop/Navbar'
import LoginButton from '../../components/Shop/login'

const Account = () => {
  const {isAuthenticated} = useAuth0();

  return (
    <>
    <Navbar></Navbar>
    { isAuthenticated ? <>
      <Profile></Profile>
      </> : <LoginButton></LoginButton>}
      </>
  );
};

export default Account