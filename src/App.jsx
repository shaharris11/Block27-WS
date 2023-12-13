import { useState } from 'react'
import SignUpForm from './Components/SignUpForm'
import Authenticate from './Components/Authenticate'
import './App.css'

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}

export default App
