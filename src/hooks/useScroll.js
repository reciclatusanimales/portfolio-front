import { useState, useEffect } from "react"

let throttleTimer = false

export default function useScroll() {
  const [scroll, setScroll] = useState(0)

  const throttle = (callback, time) => {
    if (throttleTimer) return

    throttleTimer = true

    setTimeout(() => {
      callback()
      throttleTimer = false
    }, time)
  }

  const handleScroll = () => {
    const position = window.pageYOffset
    setScroll(position)
  }

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        throttle(handleScroll, 250)
      },
      {
        passive: true,
      }
    )

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
    // eslint-disable-next-line
  }, [])

  return scroll
}
