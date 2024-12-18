import React, { useState } from 'react'
import { Link } from 'react-router'
import { eğitimList } from '../pages/eğitimList'
import "../css/Dropdown.css"
const Dropdown = () => {


  const handleHiddenDropDown = () => {
    showDropDown(false)
  }
  const [dropdown, showDropDown] = useState(false)

  return (
    <>
      <ul
        className={dropdown ? "dropdownmenu-clicked" : "dropdown-menu"}
      >
        {eğitimList.map((item) => (
          <li key={item.id}>
            <Link to={`/eğitimler/${item.id}`} className={item.cName} onMouseLeave={handleHiddenDropDown}  >
              {item.name}
            </Link>
          </li>
        ))}

      </ul>

    </>
  )
}

export default Dropdown
