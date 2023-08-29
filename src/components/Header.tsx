import { Link, NavLink } from 'react-router-dom';
import './styles/Header.css'
import { useEffect, useState } from 'react';

const Header = () => {
    const [username, setUsername] = useState(null)
    useEffect(() => {
        fetch('http://localhost:4000/profile', { credentials: 'include',}).then(
            (response) => {response.json().
            then((user)=> {

            });
            });
    }, []);

    return (
    <header>
        <NavLink to="/" className="logo">MyLogo</NavLink>
        <nav>
            {
                username && (
                    <>
                        <Link to="/create" >Create new post</Link>
                    </>
                )
            }
            {
                !username && (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/registration">Registration</NavLink>
                    </>
                )
            }
        </nav>
    </header>
)};

export default Header;