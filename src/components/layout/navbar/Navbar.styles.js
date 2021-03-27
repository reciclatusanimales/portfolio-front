import styled from "styled-components"

export const Nav = styled.nav`
  height: 3.5rem;
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  padding: 0.5rem 2rem;
  z-index: 1;
  background: var(--clr-white);

  @media screen and (min-width: 992px) {
    & {
      background: transparent;
    }
  }
  ${"" /* @media screen and (min-width: 768px) {
    background: ${({ theme }) => theme.primary10};
  } */}
`

export const NavCenter = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  z-index: 1;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    -webkit-box-align: center;
    align-items: center;
  }
`

export const NavHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  -webkit-box-align: center;
  align-items: center;
  z-index: 1;
`

export const NavBtn = styled.button`
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.primary5};
  font-size: 2rem;
  cursor: pointer;
  justify-self: right;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLinks = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
    justify-self: end;

    a {
      background: linear-gradient(
          to bottom,
          transparent 75%,
          ${({ theme }) => theme.primary5} 0
        )
        center center/0% 75% no-repeat;
      color: ${({ theme }) => theme.grey1};
      font-weight: bold;
      border-radius: 3px;
      letter-spacing: var(--spacing);
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }

    a:hover {
      background-size: 100% 100%;
    }

    li.active {
      a {
        background-size: 100% 100%;
      }
    }
  }
`
