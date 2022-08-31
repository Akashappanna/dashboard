import React from 'react'

// css
import classes from './Menu.module.css'

const MenuList = ({ items }) => {
  return (
    <div className={classes.menulist}>
      <button type="button">{items.text}</button>
    </div>
  )
}

export default MenuList
