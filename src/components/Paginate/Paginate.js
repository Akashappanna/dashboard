import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ReactPaginate from 'react-paginate'
import classes from './Paginate.module.css'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  )
}

function Paginate({ itemsPerPage, items, onPageClick }) {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  useEffect(() => {
    if (currentItems.length > 0) {
      onPageClick(currentItems)
    }
    return
  }, [currentItems])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <div className={classes.pagination}>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        nextClassName={classes.nextDisable}
        className={classes.paginate}
        pageClassName={classes.paginatelist}
        pageLinkClassName={classes.paginateItems}
        activeClassName={classes.activelist}
        previousClassName={classes.previous}
      />
      <div className={classes['top-btn']}>
        {/* <button type="button">
          <img src={upArrow} alt="upArrow" />
          <ScrollToTop />
        </button> */}
        <ScrollToTop />
      </div>
    </div>
  )
}

export default Paginate
