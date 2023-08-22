import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import './header.scss'
import {VscThreeBars} from 'react-icons/vsc'
import {RxCross2} from 'react-icons/rx'

const Header = () => {

    const [navOpen, setNavOpen] = useState('close')

    const handleNav = () => {
        setNavOpen((prev) => {
            return prev === 'close' ? 'open' : 'close' 
        })
    }
 
  return (
    <nav className='navMainContainer'>
        <div className="navSideBtnContainer" onClick={handleNav}>
            {navOpen === 'close' ? 
            <VscThreeBars className='navSideBtn' />
            : 
            <RxCross2 className='navSideBtn' />
        }
        </div>
        
        <div className="navLogoContainer">
            <img src={logo} alt="logo" className='navLogoImg'/>
        </div>
        <div className={`navLinksContainer ${navOpen}`}>
            <p className="navLinks">Courses</p>
            <p className="navLinks">Bytes</p>
            <p className="navLinks">Events</p>
            <p className="navLinks">Placements</p>
            <p className="navLinks">Community</p>
            <p className="navLinks">Hire From Us</p>
        </div>
        <div className="sideSignUpContainer">
            <button className='btn signUpBtn'>Sign in</button>
        </div>

    </nav>
  )
}

export default Header
