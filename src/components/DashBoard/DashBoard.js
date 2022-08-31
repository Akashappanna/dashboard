import React, { useState } from 'react'

// css
import classes from './DashBoard.module.css'
import DashBoardList from './DashBoardList/DashBoardList'
import DashboardStats from './DashBoardStats/DashboardStats'

const DashBoard = () => {
  const [apiData, setApiData] = useState(null)
  const apiHandler = (api) => {
    setApiData(api)
  }

  return (
    <div className={classes.dashboard}>
      <DashboardStats selectDate={apiData} />
      <DashBoardList onApi={apiHandler} />
    </div>
  )
}

export default DashBoard
