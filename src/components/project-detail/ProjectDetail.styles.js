import { Link } from "gatsby"
import styled from "styled-components"

export const ProjectTemplate = styled.section`
  padding: 5rem 0;

  h1,
  h2,
  h3 {
    text-align: center;
  }

  ul {
    margin-top: 2rem;
    display: inline-block;
  }
  ul li {
    background: ${({ theme }) => theme.grey9};
    color: ${({ theme }) => theme.grey5};
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }
  blockquote {
    background: ${({ theme }) => theme.primary9};
    border-radius: var(--radius);
    padding: 1rem;
    line-height: 2;
    color: ${({ theme }) => theme.primary5};
    margin: 2rem 0;
  }
  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
  }
  img {
    width: 15rem;
    height: 15rem;
    margin: 3rem 0;
  }
`

export const StackImg = styled.img`
  height: 50px !important;
  width: auto !important;
`

export const ProjectStack = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  ${StackImg} {
    display: inline-block;
    padding: 0.25rem 0.3rem;
  }
`

export const Button3 = styled(Link)`
  align-self: center;
  background: transparent;
  padding: 1rem 1rem;
  margin: 0 1rem;
  text-transform: uppercase;
  width: 12rem;
  transition: all 0.5s ease;
  color: #41403e;
  font-size: 1rem;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 205px 15px 225px 24px/15px 225px 15px 255px;
  border: dashed 5px ${({ theme }) => theme.primary5};
  background-image: repeating-linear-gradient(
    24deg,
    ${({ theme }) => theme.primary3},
    ${({ theme }) => theme.primary3} 2px,
    rgba(255, 255, 255, 0.75) 0,
    rgba(255, 255, 255, 0.75) 5px
  );

  &:hover {
    box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
  }
`

export const Button2 = styled(Link)`
  color: white;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary5};
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: 700;
  font-size: 0.875rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  border: 2px solid transparent;
  border-radius: var(--radius);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: block;
  position: relative;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;

  &:before {
    content: "";
    position: absolute;
    top: calc(-0.5rem);
    left: calc(-0.5rem);
    bottom: calc(0.5rem);
    border: 2px dashed white;
    border-radius: var(--radius);
    background: ${({ theme }) => theme.primary9};
    background-image: repeating-linear-gradient(
      -24deg,
      transparent,
      transparent 4px,
      rgba(255, 255, 255, 0.75) 0,
      rgba(255, 255, 255, 0.75) 5px
    );
    z-index: -1;
    width: 12rem;
  }

  &:hover {
    color: ${({ theme }) => theme.primary1};
    background: ${({ theme }) => theme.primary7};
  }
`
