import styled from "styled-components"
import Image from "gatsby-image"

export const AboutCenter = styled.div`
  display: grid;
  gap: 3rem 2rem;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
`

export const AboutImg = styled.article`
  @media screen and (min-width: 992px) {
    display: block;
    position: relative;
    max-width: 25rem;
    max-height: 30rem;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid ${({ theme }) => theme.primary5};
      top: 2rem;
      right: -2rem;
      border-radius: var(--radius);

      -moz-transition: var(--theme-transition);
      -o-transition: var(--theme-transition);
      -webkit-transition: var(--theme-transition);
      -ms-transition: var(--theme-transition);
      transition: var(--theme-transition);
    }
  }
`

export const AboutPhoto = styled(Image)`
  max-width: 25rem;
  max-height: 30rem;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: var(--radius);
  position: relative;
`

export const AboutInfo = styled.article`
  @media screen and (min-width: 992px) {
    align-self: center;
  }
`

export const AboutTitle = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`
