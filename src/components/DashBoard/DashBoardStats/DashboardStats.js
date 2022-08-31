import React, { useEffect, useState } from 'react'

import classes from '../DashBoard.module.css'
import download from '../../../assests/download.png'
import uninstall from '../../../assests/uninstall.png'
import user from '../../../assests/user.png'
import install from '../../../assests/install.png'
import churn from '../../../assests/rate.png'
import churnRate from '../../../assests/percent.png'

function dateToYMD(date) {
  var d = date.getDate()
  var m = date.getMonth() + 1 //Month from 0 to 11
  var y = date.getFullYear()
  return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
}

const DashboardStats = ({ selectDate }) => {
  const [statsData, setStatsData] = useState(null)
  const [dateData, setDateData] = useState({
    startDate: dateToYMD(new Date()),
    endDate: dateToYMD(new Date()),
  })

  const api = `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${dateData.startDate}&todate=${dateData.endDate}`

  useEffect(() => {
    if (selectDate !== null) {
      setDateData((prevState) => {
        return {
          ...prevState,
          startDate: selectDate.startDate,
          endDate: selectDate.endDate,
        }
      })
    }
    return
  }, [selectDate])

  const fetchData = async () => {
    const response = await fetch(`${api}`)
    const res = await response.json()
    // let newData = []
    // for (const x in res.data) {
    //   newData.push(`${x}: ${res.data[x]} `)
    // }
    setStatsData(res.data)
  }
  console.log(statsData)

  useEffect(() => {
    fetchData()
  }, [api])

  return (
    <div className={classes['dashboard-stats']}>
      {statsData !== null && (
        <React.Fragment>
          <div className={classes.statsitem}>
            <div className={classes.itemContainer}>
              <div className={classes.circle}>
                <img src={download} alt="statsIcon" />s
              </div>
              <div className={classes.itemsText}>
                <span>{statsData.totalInstall}</span>
                <span> App installed</span>
              </div>
            </div>
          </div>

          <div className={classes.statsitem}>
            <div className={classes.itemContainer}>
              <div className={classes.circle}>
                <img src={install} alt="statsIcon" />s
              </div>
              <div className={classes.itemsText}>
                <span>{statsData.activeinstall}</span>
                <span>Active installs</span>
              </div>
            </div>
          </div>

          <div className={classes.statsitem}>
            <div className={classes.itemContainer}>
              <div className={classes.circle}>
                <img src={churn} alt="statsIcon" />s
              </div>
              <div className={classes.itemsText}>
                <span>{statsData.churn} %</span>
                <span> Chrun Rate</span>
              </div>
            </div>
          </div>

          <div className={classes.statsitem}>
            <div className={classes.itemContainer}>
              <div className={classes.circle}>
                <img src={uninstall} alt="statsIcon" />s
              </div>
              <div className={classes.itemsText}>
                <span>{statsData.totaluninstall}</span>
                <span>App Un-installed</span>
              </div>
            </div>
          </div>

          <div className={classes.statsitem}>
            <div className={classes.itemContainer}>
              <div className={classes.circle}>
                <img src={user} alt="statsIcon" size={24} />s
              </div>
              <div className={classes.itemsText}>
                <span>{statsData.aliveappusers}</span>
                <span> Alive App users</span>
              </div>
            </div>
          </div>

          <div className={classes.statsitem}>
            <div className={classes.itemContainer}>
              <div className={classes.circle}>
                <img src={churnRate} alt="statsIcon" />s
              </div>
              <div className={classes.itemsText}>
                <span>{statsData.alivechurn} %</span>
                <span>Alive chrun Rate</span>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {statsData === null && <p>Data not found</p>}
    </div>
  )
}

export default DashboardStats
