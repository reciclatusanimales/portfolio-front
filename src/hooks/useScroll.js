import { useState, useEffect, useRef } from "react"

let throttleTimer = false

export default function useScroll() {
  const [scroll, setScroll] = useState(0)
  const timer = useRef(null)

  const throttle = (callback, time) => {
    if (throttleTimer) return

    throttleTimer = true

    timer.current = setTimeout(() => {
      callback()
      throttleTimer = false
    }, time)
  }

  const handleScroll = () => {
    const position = window.pageYOffset
    setScroll(position)
  }

  useEffect(() => {
    const handler = () => {
      throttle(handleScroll, 250)
    }

    window.addEventListener("scroll", handler, {
      passive: true,
    })

    return () => {
      if (timer.current) clearTimeout(timer.current)
      window.removeEventListener("scroll", handler)
    }
    // eslint-disable-next-line
  }, [])

  return scroll
}
