import React from "react"

import { Label, Input, Span } from "./ThemeSwitch.styles"

const IOSSwitch = ({ theme, toggleTheme }) => {
  return (
    <Label>
      <Input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <Span />
    </Label>
  )
}

export default IOSSwitch
