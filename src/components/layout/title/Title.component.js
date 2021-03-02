import React from "react"

import { TitleContainer, Underline } from "./Title.styles"

const Title = ({ title }) => {
  return (
    <TitleContainer>
      <h2>{title || "Título"}</h2>
      <Underline />
    </TitleContainer>
  )
}

export default Title
