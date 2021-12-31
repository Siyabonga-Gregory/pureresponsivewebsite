import React, {useState} from 'react'
import {RiMenu3Line,RiCloseLin, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css'

const NavBarMenu=()=>(
    <>
      <p><a href="csharp">C#</a></p>
      <p><a href="java">Java</a></p>
      <p><a href="php">Php</a></p>
      <p><a href="html">Html</a></p>
      <p><a href="css">Css</a></p>
      <p><a href="javascript">Javascript</a></p>
    </>
)

const Navbar = () => {
    const [toogleMenu,setToogleMenu]= useState(false);
    return (
        <div className='navbar'>
            <div className='navbar-links'>
               <div className='navbar-links_logo'>
                   <img src={logo} alt='logo' />
                </div>
                <div className='navbar-links_container'>
                   <NavBarMenu/>  
                </div>
            </div>
            <div className='navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='navbar-menu'>
              {toogleMenu
              ?<RiCloseLine color="#fff" size={27} onClick={()=>setToogleMenu(false)} />
              :<RiMenu3Line color="#fff" size={27 } onClick={()=>setToogleMenu(true)} />
              }
    
              {toogleMenu && (
              <div className='navbar-menu_container scale-up-center'>
                <div className='navbar-menu_container-links'>  
                    <NavBarMenu/> 
                    <div className='navbar-menu_container-links-sign'>
                        <p>Sign in</p>
                        <button type='button'>Sign up</button>
                    </div>  
                </div>
              </div>
              )}
            </div>
        </div>
    )
}

export default Navbar
