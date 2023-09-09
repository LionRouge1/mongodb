import { useState } from 'react';
import '../styles/Form.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [error, setError] = useState('');

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== pwdConfirm) return setError('Password confirmation not match');
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, pwdConfirm }),
    };
    const response = await fetch('http://localhost:4000/register', config);

    if (response.status === 200) {
      alert('Registration successful');
    } else {
      setError('Registration fails');
    }
  };

  return (
    <form onSubmit={register}>
      <h1>Registration</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={pwdConfirm}
        onChange={(e) => setPwdConfirm(e.target.value)}
      />
      <button type="submit">Register</button>
      <span className="error">{error}</span>
    </form>
  );
};

export default Registration;
