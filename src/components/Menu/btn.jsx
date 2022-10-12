import React, {useState} from 'react';
import NavMenu2 from './navMenu2';


function Btn() {
    const [display, setDisplay] = useState(false)
    const [name, setName] = useState('Show Full Menu')

    const clickHandler = () => {
        setDisplay(!display)
        
        name === 'Show Full Menu'
        ? setName('Hide Menu' )
        : setName ('Show Full Menu')

    }
    return ( 
        <>
        {display && <NavMenu2 />}
        <button className='btn1' onClick={clickHandler}>{name}</button>
        </>
     );
}

export default Btn;