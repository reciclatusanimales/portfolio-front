import styled from "styled-components"

export const TitleContainer = styled.div`
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

  -moz-transition: var(--theme-transition);
  -o-transition: var(--theme-transition);
  -webkit-transition: var(--theme-transition);
  -ms-transition: var(--theme-transition);
  transition: var(--theme-transition);
`
