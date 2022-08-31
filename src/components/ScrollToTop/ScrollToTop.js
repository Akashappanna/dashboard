import React, { useEffect, useState } from 'react'
import upArrow from '../../assests/upArrow.png'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true)

  const toggleView = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  //   window.addEventListener("scroll", toggleView);
  //   console.log("apple");

  useEffect(() => {
    window.addEventListener('scroll', scrollUp)

    return () => {
      window.removeEventListener('scroll', scrollUp)
    }
  }, [])

  return (
    <div onClick={scrollUp}>
      <img src={upArrow} alt="upArrow" />
    </div>
  )
}

export default ScrollToTop
