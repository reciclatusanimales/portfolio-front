import styled from "styled-components"

export const FadeInBottom = styled.div`
  opacity: 0;
  transition: opacity 500ms;
`

export const FadeIn = styled.div`
  opacity: 0;
  transition: opacity 500ms;
`

export const FadeInLeft = styled.div`
  opacity: 0;
  transition: opacity 500ms;
`

export const FadeInRight = styled.div`
  opacity: 0;
  transition: opacity 500ms;
`

export const ScrollContainer = styled.div`
  ${({ isScrolled }) =>
    isScrolled &&
    `   
      ${FadeInBottom} {
        opacity: 1;
        animation: fade-in-bottom 1s ease-in-out both;
      }

      ${FadeIn} {
        opacity: 1;
        animation: fade-in 1s ease-in-out both;
      }

      ${FadeInLeft} {
        opacity: 1;
        animation: slide-in-left 1s ease-in-out both;
      }

      ${FadeInRight} {
        opacity: 1;
        animation: slide-in-right 1s ease-in-out both;
      }

        
    `}
`
