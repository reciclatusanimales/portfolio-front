import { Link } from "gatsby"
import styled from "styled-components"

export const SectionContainer = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.primary10};
`

export const SectionTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`

export const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.primary5};
  margin-left: auto;
  margin-right: auto;
`

export const Text = styled.p`
  width: 85vw;
  max-width: 30rem;
  margin: 0 auto;
  color: #1a1a1a;
`

export const ContainerCenter = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: 676px) {
    display: grid;
    padding-left: 3rem;
    padding-right: 3rem;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 3rem;
    -moz-column-gap: 3rem;
    grid-gap: 2.5rem;
    column-gap: 3rem;
  }

  @media screen and (min-width: 992px) {
    padding-left: 4rem;
    padding-right: 4rem;
    grid-template-columns: 2fr 2fr;
    grid-gap: 2.5rem;
  }

  @media screen and (min-width: 1170px) {
    padding-left: 5rem;
    padding-right: 5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 200px 200px;
    gap: 3.5rem;
    grid-template-areas:
      "a b b"
      "a c d";

    .work-1 {
      grid-area: a;
    }
    .work-2 {
      grid-area: b;
    }
    .work-3 {
      grid-area: c;
    }
    .work-4 {
      grid-area: d;
    }
  }
`
export const Content = styled.div`
  background-color: #fff;
  color: #1a1a1a;
  top: 0;
  left: 0;
  padding: calc(8px * 2);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  border-radius: var(--radius);
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transition: 0.5s;
`

export const Img = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  max-width: 100%;
  vertical-align: middle;
  box-shadow: 0 0.2em 1.2em hsla(20, 20, 20, 10%);
  transition: 0.5s;
`

export const Work = styled.article`
  position: relative;
  border-radius: var(--radius);
  margin-bottom: 5rem;
  height: 15rem;
  opacity: 0.9;
  cursor: default;

  &:before {
    content: "";
    position: absolute;
    border: 3px dashed #fff;
    border-radius: var(--radius);
    background-image: repeating-linear-gradient(
      -24deg,
      transparent,
      transparent 4px,
      rgba(255, 255, 255, 0.75) 0,
      rgba(255, 255, 255, 0.75) 5px
    );
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1170px) {
    height: 100%;
  }

  &:hover {
    ${Content} {
      opacity: 1;
      top: 22px;
      left: 20px;
    }

    ${Img} {
      top: 22px;
      left: 20px;
    }
  }
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1rem;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled(Link)`
  font-size: 2rem;
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-weight: bold;
  color: ${({ theme }) => theme.grey1};
`

export const OpenIcon = styled.a`
  color: ${({ theme }) => theme.grey1};
  font-size: 1rem;
  margin-left: 0.5rem;

  @media screen and (min-width: 676px) {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`

export const Subtitle = styled.p`
  display: block;
  color: #919495;
  
  @media screen and (min-width: 1170px) {
    display: none;
  }
`

export const Summary = styled.div`
  display: none;
  font-size: 0.875rem;

  @media screen and (min-width: 1170px) {
    display: block;
  }
`

export const Footer = styled.div`
  margin-top: auto;
  font-size: calc(8px * 2);
  line-height: calc(8px * 2);
  display: flex;
  justify-content: space-between;
`

export const StackImg = styled.img`
  height: 25px !important;
  width: auto !important;
  margin: 5px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 676px) {
    height: 28px !important;
    width: auto !important;
  }

  @media screen and (min-width: 992px) {
    height: 30px !important;
    width: auto !important;
  }

  @media screen and (min-width: 1170px) {
    height: 33px !important;
    width: auto !important;
  }
`

export const Stack2 = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }

  ${StackImg} {
    display: inline-block;
    padding: 0.25rem 0.3rem;
  }
`

export const Stack = styled.ul`
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`

export const StackTag = styled.li`
  float: left;
  font-size: 0.6rem;
  background: ${({ theme }) => theme.primary10};
  border-radius: 3px 0 0 3px;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  padding: 0 13px 0 18px;
  position: relative;
  margin: 0 5px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;

  @media screen and (min-width: 676px) {
    font-size: 0.8rem;
    padding: 0 20px 0 23px;
    margin: 0 10px 10px 0;
  }

  &:before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: "";
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 8px;
  }

  &:after {
    background: #fff;
    border-bottom: 11px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.primary10};
    border-top: 11px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
  }
`
