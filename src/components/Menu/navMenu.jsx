import React from 'react'
import '../Menu/menu.css';

function NavMenu() {
    return ( 
        <>
        <div className='menu-container'>
        <div className='menu'>Menu
        </div>
        <nav className='nav-menu'>
        <h2 className='brand1'>Current menu</h2>
           <ul className='ul-items'>
                <li className='navItem'><a href="#all" className='navLink'>All</a></li>
                <li className='navItem'><a href="#rice" className='navLink'>Rice</a></li>
                <li className='navItem'><a href="beans" className='navLink'>Beans</a></li>
                <li className='navItem'><a href="#Fries" className='navLink'>Fries</a></li>
                <li className='navItem'><a href="#swallow" className='navLink'>Swallow</a></li>
                <li className='navItem'><a href="#others" className='navLink'>Others</a></li>
            </ul>
            </nav>
        </div>
        </>
     );
}

export default NavMenu;