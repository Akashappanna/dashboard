import React from 'react'

// css
import classes from './Menu.module.css'

const Logo = () => {
  return (
    <React.Fragment>
      <div className={classes['menu-header']}>
        <div className={classes.logoHeader}>
          <div className={classes.logo}>{/* <img src="" alt="logo" /> */}</div>
          <p>WOW</p>
        </div>
        <div className={classes.outerCircle}>
          <div className={classes.innerCircle}>
            <div className={classes.circle}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Logo
