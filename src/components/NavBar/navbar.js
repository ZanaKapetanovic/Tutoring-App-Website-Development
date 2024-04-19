import React, {useState} from 'react';
import './navbar.css';
import logoo from '../../assets/logoo.png'
import {Link} from 'react-scroll';
import pravimenu from '../../assets/pravimenu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
         <img src={logoo}  alt="logoo" classname='logoo'/>
         <div className="desktopMenu">
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
         <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
         <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Join Us</Link>
         <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Contact</Link>
         </div>
        
         <img src={pravimenu}  alt="menuu" className='mob' onClick={()=>setShowMenu(!showMenu)}/>
         <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>Home</Link>
         <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>About</Link>
         <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>Join Us</Link>
         <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>Contact</Link>
         </div>
        
        </nav>

    )
}

export default Navbar;