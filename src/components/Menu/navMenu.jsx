import React from 'react';
import '../Menu/menu.css';
import chicken from '../images/chicken-2.jpg'



function NavMenu() {
    return ( 
        <>
        <div className= 'menu-container' id='menu-container'>
        <div className='menu'>Menu
        </div>
        
        <h2 className='brand1'>Current menu</h2>
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
                <p>$12.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$25.99</p>
        </div>
        <div className= 'menu1'>
                <img className='feat-img1' src= {chicken} alt=''/>
                    <h2>Jollof Rice and Chicken</h2>
                    <p>Hot and spicy with grilled, marinated chicken<br/>
                it can be served any assortments of your choice</p>
                <p>$15.99</p>
        </div>
        
        </div>
            </div>
            
            </>
     );
}

export default NavMenu;