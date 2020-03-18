import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/ReactJS-StarWarsAPI-Website/">
                    StarDB
                </Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/ReactJS-StarWarsAPI-Website/people/">People</Link>
                </li>
                <li>
                    <Link to="/ReactJS-StarWarsAPI-Website/planets/">Planets</Link>
                </li>
                <li>
                    <Link to="/ReactJS-StarWarsAPI-Website/starships/">Starships</Link>
                </li>
                <li>
                    <Link to="/ReactJS-StarWarsAPI-Website/login">Login</Link>
                </li>
                <li>
                    <Link to="/ReactJS-StarWarsAPI-Website/secret">Secret</Link>
                </li>
            </ul>

            <button
                onClick={onServiceChange}
                className="btn btn-primary btn-sm">
                Change Service
            </button>
        </div>
    );
};

export default Header;