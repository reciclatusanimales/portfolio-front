import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

export const Container = styled.section`
  margin-top: 80px;
  border-radius: var(--radius);
  background: white;
  padding: 1rem 1rem 1rem 1rem;

  @media screen and (min-width: 676px) {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 4fr 4fr 5fr;
    grid-template-areas: ". . title" "img img content" "img img .";
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    background: none;
    padding: 0;

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
      grid-template-areas: "title . title3" "content img img" ". img img";

      &:after {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }
    }
  }
`

export const TitleContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: auto auto auto;
  grid-template-areas: ". title icons";
  grid-column-gap: 5px;
  justify-items: center;
  margin-bottom: 1.5rem;
  z-index: 1;

  @media screen and (min-width: 676px) {
    display: block;
    margin-bottom: 1rem;
    padding-right: 1rem;
    grid-area: title;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 1rem;
    font-size: 2.2rem;
  }

  @media screen and (min-width: 992px) {
    padding-right: 2rem;
    padding-right: 2rem;
    font-size: 2.5rem;
  }
`

export const IconsContainer = styled.div`
  grid-area: icons;
  display: flex;
  justify-self: end;
  align-items: center;

  @media screen and (min-width: 676px) {
    grid-area: title;
  }
`

export const OpenIcon = styled.a`
  color: inherit;
  font-size: 1rem;
  margin-right: 1rem;
`

export const Title = styled(Link)`
  grid-area: title;
  font-size: 2rem;
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

  @media screen and (min-width: 676px) {
    grid-area: title;
    &:after {
      left: 2rem;
      top: 2rem;
    }
  }
`

export const Content = styled.div`
  color: hsl(0, 0, 30%);
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (min-width: 676px) {
    grid-area: content;
    margin-top: 0.5rem;
    z-index: 1;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 0;
  }
`

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1.5;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 676px) {
    display: block;
  }
`

export const Btn = styled(Link)`
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

export const ImgContainer = styled.div`
  z-index: 1;
  padding: 0 1rem;

  @media screen and (min-width: 676px) {
    grid-area: img;
    padding: 0;
  }

  position: relative;
`

export const Img = styled(Image)`
  border-radius: var(--radius);
  max-width: 100%;
  vertical-align: middle;
  box-shadow: 0 0.2em 1.2em hsla(20, 20, 20, 10%);
`
