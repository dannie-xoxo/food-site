import React from 'react';
import '../Footer/footer.css'

function Footer() {
    return ( 
        <>
        <div className="foot-cont">
            <div className="foot-cont1">
                <h1 className='foot'>Meals..</h1>
                <p>copyright &copy; 2022 </p>
            </div>
            <div className="foot-cont-2">
            <div className="foot-cont2">
                <h3>Company</h3>
                <a href='#blog-cont'>Blog</a>
                <a href='#about'>About Us</a>
                <a href='tel: +234 70 4677 8295'>Contact Us</a>
            </div>
            <div className="foot-cont3">
                <h3>Services</h3>
                <a href='#review-cont'>Reviews</a>
                <a href='#faq'>FAQs</a>
                <a href='#menu-container'>Our Menu</a>
            </div>
            </div>
        </div>
        </>
     );
}

export default Footer;