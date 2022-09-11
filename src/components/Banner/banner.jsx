import React from 'react'
import '../Banner/banner.css';
import chicken from '../images/chicken-2.jpg';



function Banner() {
    return ( 
        <>
        <div className='banner'>
            <div className='cont1'>
            <h1 className='head'>Delicious meals at your convinence</h1>
            <p className='pg1'>Order your meals from us<br />
             and we will have it delivered to your doorstep.</p>
            <button className='btn'>Get Started</button>
            </div>
            <div className='cont2'>   
                <img className='img-1' src= {chicken} alt=''/>
            </div>
        </div>
        </>
     );
}

export default Banner;