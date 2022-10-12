import React, {useState} from 'react';
import '../navBar.css';
import {BsCart2 } from 'react-icons/bs';
import {BiSearch } from 'react-icons/bi';

function NavBar() {
    const[active, setActive]= useState('mainNav');
    const[toggleIcon, setToggleIcon] = useState('toggler');

    const toggle =() => {
        active=== 'mainNav'
        ? setActive('mainNav nav-active')
        : setActive('mainNav')

        toggleIcon==='toggler'
        ? setToggleIcon ('toggler toggle')
        : setToggleIcon('toggler');
    }
    return ( 
        <>
            <nav className='keyNav'>
           <h2 className='brand'>Meals...</h2>
           <ul className= {active}>
           <li className='navItem'><a className='active' href="#Home" >Home</a></li>
                <li className='navItem'><a href="#menu-container" className='navLink'>Menu</a></li>
                <li className='navItem'><a href="signIn" className='navLink'>Sign In</a></li>
                <li className='navItem'><a href="#create" className='navLink'>Create Account</a></li>
                <div className='nav-icons'>
                <BsCart2 />
                <BiSearch />
                </div>
            </ul> 
            <div onClick={toggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            
    </nav>
        </>
     );
}

export default NavBar;