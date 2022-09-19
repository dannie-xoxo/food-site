import '../Banner/banner.css';
import { useState, useEffect } from 'react';
import content from './bulkImages'


function Banner() {
    const [count, setCount] = useState(0)
    const [anim, setAnim] = useState({

        transition:'opacity 2s linear',
        opacity: 1,
        visiblity:'visible'
    })

    useEffect (() => { 
        const interval = setInterval(() => {
            setCount(content[Math.floor(Math.random()* content.length)]);
            setAnim(content[{
                transition:'visibility 0s 2s, opacity 2s linear',
                opacity: 0,
                visiblity:'hidden' 
            }*content.length])
        },3000)
        console.log('state changed...')
        return () => clearInterval(interval);
    },[])

    // const animate = {
    //     transition:'opacity 2s linear',
    //     opacity: 1,
    //     visiblity:'visible'
    //  }
  
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
                <img className='img-1' src= {count} style={anim} alt=''/>
            </div>
        </div>

        </>
     );
}

export default Banner;