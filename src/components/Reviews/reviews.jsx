import React from 'react';
import '../Reviews/review.css'
import daniel from '../images/img5.jpg';

function Reviews() {
    return ( 
        <>
        <div className='review-cont'>
            <div className='cont-1'>
                <h1 className='rev-head'>What our customers say about us</h1>
                <p className='rev-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quos voluptas, 
                 rerum debitis officia minima temporibus architecto aliquid a facilis enim!</p>
            </div>
            <div className='cont-2'>
                <div className='user'>
                    <img className='image' src= {daniel} alt=''/>
                    <h1 className='head1'>Daniel Bryan</h1>
                    <p className='pg2'> Lagos, Nigeria</p>
                    </div>
                    <div className='text'>
                    <p>Lorem ipsum dolor, <br />
                     sit amet consectetur adipisicing elit. Doloribus nesciunt,
                     voluptates dolores ex earum sunt distinctio,
                      quas accusantium explicabo enim maxime vel cumque.<br /> 
                     Ad sed dignissimos beatae, corporis ex magnam.</p>
                </div>
            </div>
        </div>
        </>
     );
}

export default Reviews;