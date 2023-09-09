import { useState, useContext } from 'react';
import '../styles/Form.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import { redirectContext } from '../contexts/redirectContext';

const LoginPage = () => {
  const [error, setError] = useState('');
  // const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  const { redirect, setRedirect } = useContext(redirectContext);
  const [{ username, password }, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      setUser(await response.json());
      setRedirect(true);
    } else {
      setError('Wrong credentials');
    }
  };

  if (redirect) return <Navigate to="/" />;
  return (
    <form onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        value={username}
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleInput}
      />
      <button type="submit">Login</button>
      <span className="error">{error}</span>
    </form>
  );
};

export default LoginPage;
