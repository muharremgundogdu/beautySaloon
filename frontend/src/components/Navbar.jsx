import React, { useState } from 'react'
import { Link } from 'react-router'
import "../css/Navbar.css"
import "../css/Dropdown.css"
import Dropdown from './Dropdown'



const Navbar = () => {
  const [dropdown, showDropDown] = useState(false)
  const [dropDownActive, setDropDownActive] = useState(false)
  const handleShowDropDown = () => {
    showDropDown(true)
  }
  const handleHiddenDropDown = () => {
    showDropDown(false)

  }

  return (
    <div>
      <div className='navbar-container'>
        <ul> <Link to="/" >
          <img className='logo' src="/src/images/logonew.png" alt="" />
        </Link></ul>

        <ul className={dropDownActive ? "dropdown-menu-active" : "navbar-items"}>
          <li className='navbar-items'>
            <Link to="/" className='navbar-links'> Home</Link>
          </li>
          <li className='navbar-items' onMouseLeave={handleHiddenDropDown} onMouseEnter={handleShowDropDown} >
            <Link to="/eğitimler" className='navbar-links'  > Eğitimlerimiz</Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='navbar-items'>
            <Link to="/Blog" className='navbar-links , blog'> Blog</Link>
          </li>
          <li className='navbar-items'>
            <Link to="/hakkımızda" className='navbar-links'> Hakkımızda</Link>
          </li>
          <li className='navbar-items'>
            <Link to="/iletişim" className='navbar-links'> İletişim</Link>
          </li>
        </ul>

      </div>
    </div >
  )
}

export default Navbar
