import React from "react"

import { Button, LinkButton } from "./Button.styles"

const ButtonComponent = ({ children, link = false, ...props }) => {
  return link ? (
    <LinkButton {...props} href={props.to}>
      {children}
    </LinkButton>
  ) : (
    <Button {...props}>{children}</Button>
  )
}

export default ButtonComponent
