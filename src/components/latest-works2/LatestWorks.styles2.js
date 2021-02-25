import styled from "styled-components"

export const SectionContainer = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.primary10};
`

export const SectionTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  color: #1a1a1a;
`

export const Title = styled.h2``

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

export const Works = styled.ol`
  margin: calc(8px * 2) auto calc(8px * 5);
  display: grid;
  grid-row-gap: calc(7px * 8);
  grid-column-gap: calc(10px * 6);
  grid-template-columns: repeat(auto-fit, minmax(calc(10px * 35), 1fr));
  justify-items: center;
`

export const WorkList = styled.li`
  cursor: pointer;
  display: block;
  position: relative;
  perspective: 1000px;
  animation-name: animateIn;
  animation-duration: 0.35s;
  animation-delay: calc(1 * 100ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  width: calc(10px * 35);
  height: calc(7px * 35);

  &:before {
    content: "";
    position: absolute;
    top: calc(10px * -2);
    left: calc(7px * -2);
    border: 3px dashed #fff;
    border-radius: var(--radius);
    background-image: repeating-linear-gradient(
      -24deg,
      transparent,
      transparent 4px,
      rgba(255, 255, 255, 0.75) 0,
      rgba(255, 255, 255, 0.75) 5px
    );
    z-index: -1;
    width: calc(10px * 35);
    height: calc(7px * 35);
  }
`

export const WorkContent = styled.div`
  background-color: #fff;
  color: #1a1a1a;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: calc(8px * 2);
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  border-radius: var(--radius);

  clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
  -webkit-clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
`

export const WorkSecondContent = styled.div`
  background-color: #fff;
  color: #1a1a1a;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: calc(8px * 2);
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  border-radius: var(--radius);

  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transition: transform 0.5s ease-in-out, background-color 0.4s ease-in-out;
`

export const WorkLink = styled.a`
  background-color: ${({ theme }) => theme.primary9};
  border: 2px solid #fff;
  border-radius: var(--radius);
  display: block;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: calc(7px * 3);
    width: calc(10px * 2);
    height: calc(7px * 2);
    margin-top: calc(10px * -1);
    clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
    -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0ms;
  }

  &:hover {
    &:after {
      opacity: 1;
      transform: translateX(calc(8px * 1.5));
      transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0.25s;
    }
  }

  &:hover {
    ${WorkSecondContent} {
      background-color: #f5f5f5;
      transform: rotateY(-50deg);
    }
  }
`

export const WorkTitle = styled.h2`
  font-size: calc(8px * 4);
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: -0.02em;
`

export const WorkFooter = styled.div`
  margin-top: auto;
  font-size: calc(8px * 2);
  line-height: calc(8px * 2);
  display: flex;
  justify-content: space-between;
`

export const WorkStackImg = styled.img`
  height: 40px !important;
  width: auto !important;
  margin: 5px;
`

export const WorkStack = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }

  ${WorkStackImg} {
    display: inline-block;
    padding: 0.25rem 0.3rem;
  }
`
