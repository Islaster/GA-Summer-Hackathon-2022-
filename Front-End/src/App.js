import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/NavBar';
import Form from './pages/Form/Form.js';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
    <div>
      <LoginButton />
    </div>
    <div className="btn-text-right">
      <LogoutButton />
    </div>
    {/* <Profile /> */}
    <NavBar />
    <Form />
    </>
  );
}

export default App;