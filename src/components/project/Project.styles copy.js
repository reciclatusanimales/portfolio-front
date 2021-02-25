import styled from "styled-components"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

export const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: inherit;
`

export const ProjectImgContainer = styled.div`
  position: relative;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 14rem;
  grid-column: 2 / span 10;
  grid-row: 1 / span 1;
  box-shadow: var(--dark-shadow);
  z-index: 0;

  &:after {
    content: "";
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      ${({ theme }) => theme.primary5},
      #222
    );
    opacity: 0.85;
    transition: var(--transition);
    z-index: 10;
  }

  @media screen and (min-width: 576px) {
    grid-column: 2 / span 10;
    grid-row: 1 / span 1;
    height: 16rem;
  }

  @media screen and (min-width: 768px) {
    grid-column: 2 / span 9;
    grid-row: 1 / span 1;
    height: 20rem;
  }

  @media screen and (min-width: 992px) {
    grid-column: 2 / span 8;
    grid-row: 1 / span 1;
    height: 30rem;
    border-radius: var(--radius);
  }
`

export const ProjectInfo = styled.div`
  background: var(--clr-white);
  padding: 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  grid-column: 2 / span 10;
  grid-row: 2 / span 2;
  z-index: 1;

  h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 576px) {
    padding: 2rem 3rem;
    grid-column: 2 / span 10;
    grid-row: 2 / span 2;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem;
    grid-column: 2 / span 9;
    grid-row: 2 / span 2;
  }

  @media screen and (min-width: 992px) {
    border-radius: var(--radius);
    grid-column: 6 / span 6;
    grid-row: 1 / span 1;
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  margin-bottom: 5rem;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  cursor: pointer;

  &:nth-of-type(even) ${ProjectInfo} {
    text-align: right;
  }

  &:hover {
    ${ProjectImgContainer}:after {
      opacity: 0;
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-of-type(even) ${ProjectImgContainer} {
      grid-column: 3 / span 9;
      grid-row: 1 / 1;
    }

    &:nth-of-type(even) ${ProjectInfo} {
      grid-column: 3 / span 9;
      grid-row: 2 / 2;
      text-align: left;
    }
  }

  @media screen and (min-width: 992px) {
    &:nth-of-type(even) ${ProjectImgContainer} {
      grid-column: 4 / span 8;
      grid-row: 1 / 1;
    }

    &:nth-of-type(even) ${ProjectInfo} {
      grid-column: 2 / span 6;
      grid-row: 1 / span 1;
      text-align: left;
    }
  }
`

export const ProjectTitle = styled(Link)``

export const ProjectNumber = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primary5};
  margin-bottom: 0.75rem;
`

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.grey3};
`

export const StackImg = styled.img`
  height: 40px !important;
  width: auto !important;
`

export const ProjectStack = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }

  ${StackImg} {
    display: inline-block;
    padding: 0.25rem 0.3rem;
  }
`

export const ProjectGithub = styled(FaGithubSquare)`
  color: ${({ theme }) => theme.primary5};
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);

  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
`

export const ProjectSquare = styled(FaShareSquare)`
  color: ${({ theme }) => theme.primary5};
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);

  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
`
