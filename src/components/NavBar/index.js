import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';

export default function NavBar() {
    return (
        <nav className={['wrapper', s.nav_menu]. join(' ')}>
            <Link to='/form'>Configurations</Link>
            <Link to='/list'>Teams</Link>
        </nav>
    )
}
