import React from 'react';
import '../Menu/menu.css';
import chicken from '../images/chicken-2.jpg'



function NavMenu() {
    return ( 
        <>
        <div className= 'menu-container'>
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
            <div className='row'>
            <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$9.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$9.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$9.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$9.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$9.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$9.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$9.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$9.99</p>
        </div>
        </div>
            </div>
            
            </>
     );
}

export default NavMenu;