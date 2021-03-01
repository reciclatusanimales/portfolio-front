import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

export const LayoutStyles = createGlobalStyle`
    
    :root {
        --clr-white: #fff;
        --ff-primary: "Bitter", sans-serif;
        --ff-secondary: "Bitter", sans-serif;
        --transition: all 0.3s linear;
        --spacing: 0.2rem;
        --radius: 0.5rem;
        --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        --max-width: 1170px;
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: var(--ff-secondary);
        background: var(--clr-white);
        color: ${({ theme }) => theme.grey1};
        line-height: 1.5;
        font-size: 0.875rem;
    }
    button:focus {
        outline:0 !important;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }

    blockquote {
      border-left: 5px solid ${({ theme }) => theme.primary10};;
      margin: 1.5em 10px;
      padding: 0.5em 10px;
    }

    ${
      "" /* img:not(.nav-logo) {
        width: 100%;
        display: block;
    } */
    }

    h1,
    h2,
    h3,
    h4 {
        letter-spacing: var(--spacing);
        line-height: 1.25;
        margin-bottom: 0.75rem;
        font-family: var(--ff-primary);
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.25rem;
    }
    h4 {
        font-size: 0.875rem;
    }
    p {
        margin-bottom: 1.25rem;
        color: ${({ theme }) => theme.grey5};
    }
    @media screen and (min-width: 800px) {
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 2.5rem;
        }
        h3 {
            font-size: 1.75rem;
        }
        h4 {
            font-size: 1rem;
        }
        body {
            font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4 {
            line-height: 1;
        }
    }
    /*  global classes */

  

    /* section */
    .section {
        padding: 5rem 0;
    }

    .section-center {
        width: 90vw;
        margin: 0 auto;
        max-width: 1170px;
    }
    @media screen and (min-width: 992px) {
        .section-center {
            width: 95vw;
        }
    }
    /* added during recording */
    .underline {
        width: 5rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        background: ${({ theme }) => theme.primary5};
        margin-left: auto;
        margin-right: auto;
    }

    /* section title */
    .section-title {
        margin-bottom: 4rem;
        text-align: center;
    }
    .bg-grey {
        background: ${({ theme }) => theme.grey10};
    }

    /* fixed navbar */
    .navbar-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--clr-white);
        box-shadow: var(--light-shadow);
    }



    .blog-template,
    .projects-page,
    .blog-page,
    .about-page,
    .contact-page {
        background: ${({ theme }) => theme.grey10};
        min-height: calc(100vh - 5rem - 9rem);
    }

    @media screen and (min-width: 676px) {
        .services-center {
            display: grid;
            grid-template-columns: 1fr 1fr;
            -webkit-column-gap: 2rem;
            -moz-column-gap: 2rem;
            column-gap: 2rem;
        }
    }
    @media screen and (min-width: 992px) {
      .hero-img {
        display: block;
        grid-row: 1/1;
        grid-column: 6/-1;
      }
      .services-center {
          grid-template-columns: 1fr 1fr 1fr;
      }
    }
    .project {
    display: grid;
    margin-bottom: 4rem;
  }

  ${
    "" /* .project-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
  }
  .project-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, ${({ theme }) => theme.primary5}, #222);
    opacity: 0.85;
    transition: var(--transition);
  }
  .project:hover .project-img::after {
    opacity: 0;
  }
  .project-info {
    background: var(--clr-white);
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .project-number {
    display: inline-block;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.primary5};
    margin-bottom: 0.75rem;
  }
  .project-info h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  .project-desc {
    word-spacing: 15px;
    color: ${({ theme }) => theme.grey3};
  }
  .project-stack {
    margin-bottom: 1rem;
  }
  .project-stack span,
  .about-stack span {
    display: inline-block;
    background: ${({ theme }) => theme.grey9};
    color: ${({ theme }) => theme.grey5};
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
  .about-stack span {
    margin-top: 0.5rem;
  }
  .project-icon {
    color: ${({ theme }) => theme.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: var(--transition);
  }
  .project-icon:hover {
    color: ${({ theme }) => theme.primary1};
  }
  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
    .project {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }
    .project-img {
      grid-column: 1 / span 8; */
  }
      /* grid-column-end: 8; */
      ${
        "" /* grid-row: 1 / 1;
      height: 30rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);

      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    .project:nth-of-type(even) .project-info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  } */
      }
  /*
  ===============
  About Page
  ===============
  */
 .about-page {
  padding: 7rem 0;
}
.about-img {
  margin-bottom: 2rem;
  height: 25rem;
}
.about-text .section-title {
  margin-bottom: 2rem;
  text-align: left;
}
.about-text .underline {
  margin-left: 0;
  margin-right: 0;
}
.about-text p {
  line-height: 2;
}
.stack-container {
  width: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 0.5rem;
}
.stack-container span {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: var(--clr-grey-4);
}
.stack-icon {
  color: var(--clr-primary-5);
  margin-right: 0.25rem;
  font-size: 1rem;
}
@media screen and (min-width: 992px) {
  .about-center {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
  .about-img {
    grid-column: 1 / span 5;
    margin-bottom: 0;
  }
  .about-text {
    grid-column: 6 / -1;
  }
}

.not-found {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}


.not-found-error{
  text-align: center;
  margin: 0;  
  font-size: 96px;
  letter-spacing: -7px;
  animation: glitch 1s linear infinite;
}

@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}

.not-found-error:before,
.not-found-error:after{
  content: attr(title);
  position: absolute;
  left: 0;
}

.not-found-error:before{
  text-align: center;
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

.not-found-error:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
`

export const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    & {
      width: 95vw;
    }
  }
`

export const ButtonDark = styled(Link)`
  color: white;
  text-transform: uppercase;
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.5s ease;
  cursor: pointer;
  display: block;
  position: relative;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.primary3};
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: dashed 3.5px ${({ theme }) => theme.primary5};
  background-image: repeating-linear-gradient(
    24deg,
    ${({ theme }) => theme.primary7},
    ${({ theme }) => theme.primary7} 2px,
    transparent 0,
    transparent 5px
  );

  &:hover {
    box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
    font-size: 1.1rem;
  }
`
