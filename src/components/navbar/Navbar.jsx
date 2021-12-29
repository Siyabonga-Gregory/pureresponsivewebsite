import React from 'react'
import {RiMenu3Line,RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-links'>
               <div className='navbar-links_logo'>
                   <img   src={logo} alt='logo' />
                </div>
                <div className='navbar-links_container'>
                     <p><a href="home">Home</a></p>
                     <p><a href="csharp">C#</a></p>
                     <p><a href="java">Java</a></p>
                     <p><a href="php">Php</a></p>
                     <p><a href="javascript">Javascript</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
