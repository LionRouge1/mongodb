import { NavLink } from 'react-router-dom';
import './styles/Header.css'
import { useEffect } from 'react';
import axios from 'axios';

const Header = () => {
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        })
        // axios.get('http://localhost:4000/profile', { withCredentials: true });
    }, []);

    return (
    <header>
        <NavLink to="/" className="logo">MyLogo</NavLink>
        <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registration">Registration</NavLink>
        </nav>
    </header>
)};

export default Header;