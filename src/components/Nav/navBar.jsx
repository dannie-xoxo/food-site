import React from 'react';
import '../navBar.css';
import {BsCart2 } from 'react-icons/bs';
import {BiSearch } from 'react-icons/bi';

function NavBar() {
    return ( 
        <>
            <nav className='mainNav'>
           <h2 className='brand'>Meals...</h2>
           <ul className=''>
                <li className='navItem'><a href="#Home" className='navLink'>Home</a></li>
                <li className='navItem'><a href="#menu" className='navLink'>Menu</a></li>
                <li className='navItem'><a href="signIn" className='navLink'>Sign In</a></li>
                <li className='navItem'><a href="#create" className='navLink'>Create Account</a></li>
                <div className='nav-icons'>
                <BsCart2 />
                <BiSearch />
                </div>

            </ul> 
    </nav>
        </>
     );
}

export default NavBar;