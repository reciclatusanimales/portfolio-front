import React from "react"

import styled from "styled-components"
import { Underline } from "../layout/Layout.styles"

export const TitleContainer = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`

const Title = ({ title }) => {
  return (
    <TitleContainer>
      <h2>{title || "Título"}</h2>
      <Underline />
    </TitleContainer>
  )
}

export default Title
