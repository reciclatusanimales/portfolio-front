import React, { useContext } from "react"
import ThemeContext from "../../../context/ThemeContext"
import { Container, Label, Switch } from "./ThemeSwitch.styles"

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Container>
      <Switch
        type="checkbox"
        id="toggle"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <Label htmlFor="toggle" />
    </Container>
  )
}
