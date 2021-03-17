import styled from "styled-components"
import Image from "gatsby-image"

export const Header = styled.header`
  background: ${({ theme }) => theme.primary10};
  margin-top: -3.5rem;
  padding-top: 3.5rem;
  height: 100vh;
  position: relative;

  @media screen and (min-width: 992px) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 70%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    }
  }
`

export const Center = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  height: 100%;
  display: grid;
  align-items: center;
  min-height: calc(100vh - 5rem);

  @media screen and (min-width: 992px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }
`

export const Info = styled.article`
  h4 {
    color: ${({ theme }) => theme.grey5};
  }
`

export const Title = styled.div`
  text-align: left !important;
  margin-bottom: 2rem;

  .underline {
    margin-left: 0;
  }
`

export const Img = styled.article`
  display: none;

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
    }
  }
`

export const Photo = styled(Image)`
  max-width: 25rem;
  max-height: 30rem;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: var(--radius);
  position: relative;
`
