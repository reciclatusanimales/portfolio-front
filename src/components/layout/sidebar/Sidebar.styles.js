import styled from "styled-components"

export const Side = styled.aside`
  background: ${({ theme }) => theme.grey10};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);

  ${({ isOpen }) =>
    isOpen &&
    `
        transform: translateX(0);
        opacity: 1;
    `}

  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: ${({ theme }) => theme.primary5};
  cursor: pointer;

  &:hover {
    color: #e66b6b;
  }
`

export const SidebarLink = styled.li``

export const SidebarLinks = styled.ul`
  ${({ isOpen }) =>
    isOpen &&
    `
        ${SidebarLink} {
            opacity: 0;
            animation: slideRight 0.5s ease-in-out 0.3s forwards;
        }
        ${SidebarLink} a {
            display: block;
            text-align: center;
            text-transform: capitalize;
            color: inherit;
            letter-spacing: var(--spacing);
            margin-bottom: 0.5rem;
            font-size: 2rem;
            font-weight: bold;            
            transition: var(--transition);
            border-radius: var(--radius);
            transition: background-size .4s ease;
            background: linear-gradient(to bottom, transparent 62%, #fff87e 0) center center/0% 75% no-repeat;
        }

        ${SidebarLink} a:hover {
            background: ${({ theme }) => theme.primary9};
            color: ${({ theme }) => theme.primary5};
            background-size: 100% 100%;
        }

        ${SidebarLink}:nth-of-type(1) {
            animation-delay: 0.25s;
        }
        ${SidebarLink}:nth-of-type(2) {
            animation-delay: 0.5s;
        }
        ${SidebarLink}:nth-of-type(3) {
            animation-delay: 0.75s;
        }
        ${SidebarLink}:nth-of-type(4) {
            animation-delay: 1s;
        }
        ${SidebarLink}:nth-of-type(5) {
            animation-delay: 1.25s;
        }

        @keyframes slideRight {
            0% {
                transform: translateX(-200px);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `}
`

export const SidebarSocialIcons = styled.ul`
  margin-top: 1rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;

  ${({ isOpen }) =>
    isOpen &&
    `
        li {
            opacity: 0;
            animation: slideUp 0.5s ease-in-out 0.3s forwards;
        }
        li:nth-of-type(1) {
            animation-delay: 0.25s;
        }
        li:nth-of-type(2) {
            animation-delay: 0.5s;
        }
        li:nth-of-type(3) {
            animation-delay: 0.75s;
        }
        li:nth-of-type(4) {
            animation-delay: 1s;
        }
        li:nth-of-type(5) {
            animation-delay: 1.25s;
        }
        @keyframes slideUp {
            0% {
                transform: translateY(200px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `}
`

export const SidebarSocialIcon = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.grey1};
  -webkit-transition: var(--transition);
  transition: var(--transition);

  &:hover {
    color: ${({ theme }) => theme.primary5};
  }
`
