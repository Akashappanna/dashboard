import React, { useState } from 'react'
import DatePicker from '../../DateSelector/DatePicker/DatePicker'

// css
import classes from './DashBoardList.module.css'

const ListEntries = ({ onApply, onSelect, selectVal }) => {
  const [selectDuration, setSelectDuration] = useState(false)

  const selectValHandler = (e) => {
    onSelect(parseInt(e.target.value))
  }

  const selectChangeHandler = () => {
    setSelectDuration((prevState) => {
      return !prevState
    })
  }

  return (
    <div className={classes.listentries}>
      <div>
        Show
        {/* <select name="entries" value="50" className={classes.select}>
          <option value="">10</option>
          <option value="">50</option>
          <option value="">100</option>
          <option value="">1000</option>
        </select> */}
        <select
          value={selectVal}
          onChange={selectValHandler}
          className={classes.selectMenu}
        >
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={1000}>1000</option>
        </select>
        Entries
      </div>

      {/* <selectmenu className={classes['my-custom-select']}>
        <div slot="button">
          <span className={classes.label}> {selectVal} </span>
          <span behavior="selected-value" slot="selected-value"></span>
          <button behavior="button"></button>
        </div>
        <div slot="listbox">
          <div popup behavior="listbox">
            <div className={classes.section}>
              <option value={10}>10</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={1000}>1000</option>
            </div>
          </div>
        </div>
      </selectmenu> */}

      <div className={classes.selectDuration} onClick={selectChangeHandler}>
        Select Duration
      </div>
      <div
        className={`${
          !selectDuration
            ? classes.datepicker
            : classes.datepicker + ' ' + classes.active
        }`}
      >
        <DatePicker onClose={selectChangeHandler} onApply={onApply} />
      </div>
    </div>
  )
}

export default ListEntries
