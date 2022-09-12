import React from 'react';
import '../Menu/menu.css';
import chicken from '../images/chicken-2.jpg'



function NavMenu2() {
    return ( 
        <>
        <div className= 'menu-container'>
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
        
        </div>
            </div>
            
            </>
     );
}

export default NavMenu2;