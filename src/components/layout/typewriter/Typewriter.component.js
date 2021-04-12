import React, { useEffect, useRef } from "react"

import {
  TypingContainer,
  TypingOutput,
  TypingCursor,
} from "./Typewriter.styles"

let element,
  i = 0,
  a = 0,
  isBackspacing = false

const speedForward = 200,
  speedWait = 2000,
  speedBackspace = 50

function typeWriter(ar) {
  var aString = ar[a]
  if (!isBackspacing) {
    if (i < aString.length) {
      element.textContent += aString.charAt(i)
      i++
      setTimeout(function () {
        typeWriter(ar)
      }, speedForward)
    } else if (i === aString.length) {
      isBackspacing = true
      setTimeout(function () {
        typeWriter(ar)
      }, speedWait)
    }
  } else {
    if (element.textContent.length > 0) {
      element.textContent = element.textContent.substring(
        0,
        element.textContent.length - 1
      )
      setTimeout(function () {
        typeWriter(ar)
      }, speedBackspace)
    } else {
      isBackspacing = false
      i = 0
      a = (a + 1) % ar.length
      setTimeout(function () {
        typeWriter(ar)
      }, 50)
    }
  }
}

const Typewriter = ({ text }) => {
  const cursor = useRef(null)

  useEffect(() => {
    element = cursor.current
    typeWriter(text)
    // eslint-disable-next-line
  }, [])

  return (
    <TypingContainer>
      <TypingOutput>
        <TypingCursor ref={cursor} />
      </TypingOutput>
    </TypingContainer>
  )
}

export default Typewriter
