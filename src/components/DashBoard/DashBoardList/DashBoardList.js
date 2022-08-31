import React, { useEffect, useState } from 'react'
import moment from 'moment'

// css
import classes from './DashBoardList.module.css'
import ListEntries from './ListEntries'
import apple from '../../../assests/apple.svg'
import android from '../../../assests/android.svg'
import Paginate from '../../Paginate/Paginate'
import loading from '../../../assests/Ghost.gif'

const DashBoardList = ({ onApi }) => {
  const [listData, setListData] = useState([])
  const [selectVal, setSelectVal] = useState(50)
  const [newListData, setNewListData] = useState([])
  const [selectedDate, setSelectedDate] = useState({
    startDate: dateToYMD(new Date()),
    endDate: dateToYMD(new Date()),
  })
  const [isLoading, setIsLoading] = useState(false)
  const [pages, setPages] = useState(1)

  const { startDate, endDate } = selectedDate

  function dateToYMD(date) {
    var d = date.getDate()
    var m = date.getMonth() + 1 //Month from 0 to 11
    var y = date.getFullYear()
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
  }

  const api = `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${startDate}&todate=${endDate}`

  const fetchData = async (pages) => {
    setIsLoading(true)
    let data = []
    let pageVal = 1
    for (let i = 1; i <= pages; i++) {
      const response = await fetch(`${api}&page=${i}`)
      const result = await response.json()
      data = [...data, ...result.data.data]
      pageVal = result.data.pages
    }
    setListData(data)
    setNewListData(data)
    setPages(parseInt(pageVal))
    setIsLoading(false)
  }

  useEffect(() => {
    setListData([])
    fetchData(pages)
  }, [api, pages])

  const selectHandler = (data) => {
    setSelectVal(data)
  }

  useEffect(() => {
    onApi(selectedDate)
  }, [selectedDate])

  const createdDate = (dateVal) => {
    let isoDate = dateVal
    let newDate = moment.utc(isoDate).format('DD MMM YYYY')
    return newDate
  }
  const applyHandler = (selection) => {
    const startDate = dateToYMD(selection[0].startDate)
    const endDate = dateToYMD(selection[0].endDate)
    setSelectedDate((prevState) => {
      return {
        ...prevState,
        startDate: startDate,
        endDate: endDate,
      }
    })
  }

  const listDataHandler = (listVal) => {
    setNewListData(listVal)
  }

  return (
    <div className={classes['dashboard-list']}>
      <ListEntries
        onApply={applyHandler}
        onSelect={selectHandler}
        selectVal={selectVal}
      />
      <div className={classes.table}>
        <table>
          <thead>
            <tr className={classes['table-header']}>
              <th>Date</th>
              <th>Day Installs</th>
              <th>platform</th>
              <th>Day Uninstalls</th>
              <th>platform</th>
              <th>churn Rate</th>
              <th>churn platform</th>
            </tr>
          </thead>

          {newListData.length > 0 && isLoading === false && (
            <tbody>
              {newListData.map((listitem, idx) => (
                <tr key={idx}>
                  {listData.length > 0 && (
                    <td>{createdDate(listitem.created_At)}</td>
                  )}
                  <td>{listitem.totalinstall}</td>
                  <td className={classes.iosAndroid}>
                    <span>
                      <img src={android} alt="android" />
                      {listitem.android_install}
                    </span>
                    <span>
                      <img src={apple} alt="apple" />
                      {listitem.ios_install}
                    </span>
                  </td>
                  <td>{listitem.totaluninstall}</td>
                  <td className={classes.iosAndroid}>
                    <span>
                      <img src={android} alt="android" />
                      {listitem.android_uninstall}
                    </span>
                    <span>
                      {' '}
                      <img src={apple} alt="apple" />
                      {listitem.ios_uninstall}
                    </span>
                  </td>
                  <td>{listitem.totalchurn} %</td>
                  <td className={classes.iosAndroid}>
                    <span>
                      {' '}
                      <img src={android} alt="android" />
                      {listitem.android_churn}
                    </span>
                    <span>
                      {' '}
                      <img src={apple} alt="apple" />
                      {listitem.ios_churn} %
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {isLoading === true && (
          <div className={classes.isloading}>
            <img src={loading} alt="loading" />
            <p> Loading...</p>
          </div>
        )}
      </div>

      <div className={classes.paginateTop}>
        <div className={classes.paginateContainer}>
          {listData.length > 0 && (
            <Paginate
              itemsPerPage={selectVal}
              items={listData}
              onPageClick={listDataHandler}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default DashBoardList
