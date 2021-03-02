import React from "react"
import { Container, Label, Switch } from "./ThemeSwitch.styles"

export default function ThemeSwitch({ theme, toggleTheme }) {
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
