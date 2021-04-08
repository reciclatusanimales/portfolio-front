import React from "react"

import { TitleContainer, Underline } from "./Title.styles"

const Title = ({ title, ...props }) => {
  return (
    <TitleContainer {...props}>
      <h2>{title || "Título"}</h2>
      <Underline />
    </TitleContainer>
  )
}

export default Title
