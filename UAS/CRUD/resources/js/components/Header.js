import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = () => (
    <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Sistem Informasi BTS Song</Link>
        </div>
    </nav>
)
 
export default Header