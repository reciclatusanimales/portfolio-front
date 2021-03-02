import styled from "styled-components"

export const ServicesSection = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.grey10};
`

export const ServicesCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  visibility: hidden;

  & > * {
    visibility: visible;
    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;
  }

  &:hover > * {
    opacity: 0.4;
    transform: scale(0.9);
    filter: blur(2px);
  }

  & > *:hover {
    opacity: 1;
    transform: scale(1);
    transition-delay: 0ms, 0ms;
    filter: blur(0);
  }

  @media screen and (min-width: 676px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 95vw;
  }
`

export const Service = styled.div`
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  cursor: default;

  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  &:hover {
    background: ${({ theme }) => theme.primary10};
  }

  &:hover .underline {
    background: var(--clr-white);
  }
`
