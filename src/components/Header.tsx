import { NavLink } from 'react-router-dom';
import './styles/Header.css'

const Header = () => (
    <header>
        <NavLink to="/" className="logo">MyLogo</NavLink>
        <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registration">Registration</NavLink>
        </nav>
    </header>
);

export default Header;