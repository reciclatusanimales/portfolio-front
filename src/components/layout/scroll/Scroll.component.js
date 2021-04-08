import React, { useState, useEffect, useRef } from "react"

import PropTypes from "prop-types"
import { ScrollContainer } from "./Scroll.styles"

const Scroll = ({ scroll, children }) => {
  const containerRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    )
  }

  useEffect(() => {
    const el = containerRef.current
    setScrolled(elementInView(el, 1.25))
  }, [scroll])

  return (
    <ScrollContainer ref={containerRef} isScrolled={scrolled}>
      {children}
    </ScrollContainer>
  )
}

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Scroll
