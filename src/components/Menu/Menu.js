import React from 'react'
import Logo from './Logo'

// css
import classes from './Menu.module.css'
import MenuList from './MenuList'

const menuListItems = [
  {
    id: '',
    text: 'DashBoard',
    logo: '',
    subItems: false,
  },
  {
    id: '',
    text: 'WOW Users',
    logo: '',
    subItems: false,
  },
  {
    id: '',
    text: 'Video Clips',
    logo: '',
    subItems: false,
  },
  {
    id: '',
    text: 'Reported Content',
    logo: '',
    subItems: false,
  },
  {
    id: '',
    text: 'Category',
    logo: '',
    subItems: false,
  },
  {
    id: '',
    text: 'Info Page',
    logo: '',
    subItems: false,
  },
  {
    id: '',
    text: 'FAQ',
    logo: '',
    subItems: false,
  },
  {
    id: '',
    text: 'Push Notification',
    logo: '',
    subItems: false,
  },
  {
    id: '',
    text: 'Internal User',
    logo: '',
    subItems: false,
  },
]

const Menu = () => {
  return (
    <div className={classes.menu}>
      <Logo />
      {menuListItems.map((items, idx) => (
        <MenuList key={idx} items={items} />
      ))}
    </div>
  )
}

export default Menu
