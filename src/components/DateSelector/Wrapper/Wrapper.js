import React from 'react'

// css
import classes from './Wrapper.module.css'
import close from '../../../assests/close.png'

const Wrapper = ({ children, onClose, onApply, onCancel }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperHeader}>
        <div className={classes.headers}>Select duration</div>
        <div
          className={`${classes.headers} ${classes.close}`}
          onClick={onClose}
        >
          <img src={close} alt="close-icon" />
        </div>
      </div>
      {children}
      <div className={classes.wrapperFooter}>
        <button
          type="button"
          className={`${classes['wrapper-btn']} ${classes.btn}`}
          onClick={onApply}
        >
          Apply
        </button>
        <button type="button" className={classes.btn} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Wrapper
