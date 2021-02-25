import React from "react"

import { Button } from "./Button.styles"

const ButtonComponent = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
)

export default ButtonComponent
