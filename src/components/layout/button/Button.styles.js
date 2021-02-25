import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  color: ${({ theme }) => theme.grey5};
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
  height: 2.75rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: white;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: dashed 3.5px ${({ theme }) => theme.primary5};
  background-image: repeating-linear-gradient(
    24deg,
    ${({ theme }) => theme.primary3},
    ${({ theme }) => theme.primary3} 2px,
    rgba(255, 255, 255, 0.75) 0,
    rgba(255, 255, 255, 0.75) 5px
  );

  &:hover {
    box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
    font-size: 1.1rem;
  }
`
