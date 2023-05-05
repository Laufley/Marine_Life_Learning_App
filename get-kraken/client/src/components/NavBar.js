import React from "react";
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
    <ul id="navUl">
        <li className="navLi">
            <Link to="/">Home</Link>
        </li>
        <li className="navLi">
            <Link to="/modules">Knowledge Bubbles</Link>
        </li >
    </ul >
    );
}
export default NavBar;