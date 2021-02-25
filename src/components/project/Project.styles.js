import { Link } from "gatsby"
import styled from "styled-components"

export const ProjectContainer = styled.section`
  margin-top: 80px;

  @media (min-width: 40em) {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 4fr 4fr 5fr;
    grid-template-areas: ". . title" "img img content" "img img .";
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;

    &:after {
      border-radius: var(--radius);
      content: "";
      grid-column: 2 / -1;
      grid-row: 1 / 3;
      position: relative;
      z-index: 0;
      background: white;
      box-shadow: var(--dark-shadow);
    }

    &:nth-of-type(even) {
      grid-template-areas: "title . ." "content img img" ". img img";

      &:after {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }
    }
  }
`

export const ProjectTitle = styled(Link)`
  font-size: 2rem;
  margin: 0 0 1rem;
  position: relative;
  z-index: 1;
  text-align: center;
  letter-spacing: var(--spacing);
  font-weight: bold;
  color: inherit;

  &:after {
    content: "";
    position: absolute;
    width: 6rem;
    background-color: hsl(0, 0, 80%);
    height: 2px;
    top: 0;
    left: 0;
  }

  @media (min-width: 40em) {
    grid-area: title;
    padding-top: 2rem;
    padding-left: 2rem;
    text-align: left;
    font-size: 2.5rem;

    &:after {
      left: 2rem;
      top: 2rem;
    }
  }
`

export const ProjectContent = styled.div`
  @media (min-width: 40em) {
    grid-area: content;
    z-index: 1;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  color: hsl(0, 0, 30%);
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media (min-width: 40em) {
    margin-bottom: 0;
  }
`

export const ProjectDescription = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1.5;
`

export const ProjectBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 40em) {
    display: block;
  }
`

export const ProjectBtn = styled(Link)`
  text-decoration: none;
  border: 1px solid hsl(209, 61%, 16%);
  border-radius: 1em;
  padding: 1em 2em;
  z-index: 1;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: inherit;
  background-color: white;
  display: inline-block;
`

export const ProjectImgContainer = styled.div`
  z-index: 1;
  @media (min-width: 40em) {
    grid-area: img;
  }

  position: relative;
`

export const ProjectImg = styled.img`
  border-radius: var(--radius);
  max-width: 100%;
  vertical-align: middle;
  box-shadow: 0 0.2em 1.2em hsla(20, 20, 20, 10%);
`
