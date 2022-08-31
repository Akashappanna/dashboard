import React, { useState } from 'react'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import Wrapper from '../Wrapper/Wrapper'
import classes from './DatePicker.module.css'

const DatePicker = ({ onClose, onApply }) => {
  function handleSelect(date) {
    console.log(date) // native Date object
  }
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  const applyHandler = () => {
    onApply(state)
    // setState([
    //   {
    //     startDate: new Date(),
    //     endDate: addDays(new Date(), 7),
    //     key: 'selection',
    //   },
    // ])
    onClose()
  }

  const cancelHandler = () => {
    setState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection',
      },
    ])
  }

  // console.log('datepicker :', state)

  return (
    <Wrapper onClose={onClose} onApply={applyHandler} onCancel={cancelHandler}>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
        className={classes.dateContainer}
      />
    </Wrapper>
  )
}

export default DatePicker
