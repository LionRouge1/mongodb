import { useState } from 'react';
import '../components/styles/Form.css'

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password, pwdConfirm})
    }
    const request = await fetch('http://localhost:4000/register', config)
  }

  return (
    <form onSubmit={register}>
      <h1>Registration</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={pwdConfirm}
        onChange={(e)=> setPwdConfirm(e.target.value)}
      />
      <button>Register</button>
    </form>
  )
}

export default Registration;