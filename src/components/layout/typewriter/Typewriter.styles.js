import styled from "styled-components"

export const TypingContainer = styled.div`
  margin-top: 3rem;
`

export const TypingOutput = styled.div`
  color: ${({ theme }) => theme.grey1};
  font-style: italic;
  font-weight: bold;
  font-size: 1.5rem;
`

export const TypingCursor = styled.p`
  &:after {
    content: "";
    display: inline-block;
    margin-left: 6px;
    background-color: ${({ theme }) => theme.grey1};
    animation-name: blink;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
    height: 22px;
    width: 3px;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`
