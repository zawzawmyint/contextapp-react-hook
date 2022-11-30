import React, { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext';
import { ThemeContext } from './contexts/ThemeContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntex }}>
            <h1>Content App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
            </ul>
        </nav>
    );
}

export default Navbar;