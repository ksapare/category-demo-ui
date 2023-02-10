import React from 'react'
import './header.styles.css'

import { Link } from 'react-router-dom'

const Header = () => (
    <div className='options'>
        <Link className='option' to='/'>Home</Link>
        <Link className='option' to='/get-started'>Getting Started</Link>
        <Link className='option' to='/api'>API Integration</Link>
    </div>
);

export default Header;