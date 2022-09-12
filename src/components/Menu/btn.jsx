import React, {useState} from 'react';
import NavMenu from './navMenu';


function Btn() {
    const [display, setDisplay] = useState(true)
    return ( 
        <>
        {display && <NavMenu />}
        <button className='btn1' onClick={() => setDisplay(!display)}>Full Menu</button>
        </>
     );
}

export default Btn;