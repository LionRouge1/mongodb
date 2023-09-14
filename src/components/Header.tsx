import { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/Header.css';
import { UserContext } from './contexts/userContext';

const Header = () => {
//   const [username, setUsername] = useState(null);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', { credentials: 'include' })
      .then((response) => {
        response.json()
          .then((userInfo) => {
            setCurrentUser(userInfo);
          });
      });
  }, [setCurrentUser]);

  const logout = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'DELETE',
    });
    setCurrentUser(null);
  };

  const username = currentUser?.username;
  return (
    <header>
      <NavLink to="/" className="logo">MyLogo</NavLink>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a href="#section" onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registration">Registration</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
