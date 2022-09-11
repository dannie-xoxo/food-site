import React from 'react'
import '../Banner/banner.css';
import chicken from '../images/chicken1.jpg'


function Banner() {
    return ( 
        <>
        <div className='banner'>
            <div className='cont1'>
            <h1 className='head'>Delicious meals at your convinence</h1>
            <p>Order your meals from us and we will have it delivered to your doorstep</p>
            <button className='btn'>Get Started</button>
            </div>
            <div className='cont2'>
                <figure>
                <img className='img-1' src= {chicken} alt=''/>
                </figure>
            </div>
        </div>
        </>
     );
}

export default Banner;