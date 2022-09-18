import React from 'react';
import '../Blog/blog.css'
import chicken from '../images/chicken-2.jpg';


function Blog() {
    return ( 
        <>
        <div className='blog-cont' id='blog-cont'>
            <h1 className='blog-head'>Blog Our Latest News</h1>
            <p className='blog-pg'>Have you ever browsed food blogs like mine
            and wondered <br/>
            how to start a food blog of your very own?</p>

            <div className='blog-row'>
            <div className= 'blog1'>
                <img className='blog-img1' src= {chicken} alt=''/>
               <p cla><span>Design</span> 19 July 2019</p> 
                    <h3>Better Than Takeout Kung Pao Chicken</h3>
                    <p>This spicy, tangy and sweet better than takeout<br/>
                no peanut kung pao chicken stir fry recipe.</p>
                <p className='read'>Read more</p>
        </div>
        <div className= 'blog1'>
                <img className='blog-img1' src= {chicken} alt=''/>
                <p><span>Design</span> 24 August 2019</p> 
                    <h3>The Best Sesame Soy Brocoli Salad</h3>
                    <p>Hello brocoli salad! Brocoli salad with a sweet<br/>
                and tangy dressing is my new go to for summer parties.</p>
                <p className='read'>Read more</p>
        </div>
        <div className= 'blog1'>
                <img className='blog-img1' src= {chicken} alt=''/>
                <p><span>Design</span> 15 September 2019</p> 
                    <h3>Better Than Takeout Kung Pao Chicken</h3>
                    <p>This super easy version of dan dan noodles is<br/>
                fast, flawful, and vegetarian. its tasty.</p>
                <p className='read'>Read more</p>
        </div>
        
        </div>
        </div>
        </>
     );
}

export default Blog;