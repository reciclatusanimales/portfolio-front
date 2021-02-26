import styled from "styled-components"

export const Label = styled.label`
  height: 20px;
  width: 40px;
  display: block;
  float: left;
  margin: 0 10px 0 0;
  position: relative;
`

export const Span = styled.span`
  border-color: #41403e;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  background-color: ${({ theme }) => theme.primary7};
  border-color: #41403e;
  border-bottom-left-radius: 0.7rem 1rem;
  border-bottom-right-radius: 1rem 0.9rem;
  border-style: solid;
  border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 0.6rem;
  border-width: 2px;

  &:before {
    bottom: -5px;
    height: 26px;
    width: 26px;
    content: "";
    position: absolute;
    transition: 0.6s;

    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23fff' stroke='%233f4141' stroke-width='3' d='m8.21134,27.49693c3.0425,-7.4106 16.91819,-22.0214 37.8362,-22.43443c20.918,-0.41304 34.83781,14.22419 38.86247,21.12914c4.02466,6.90495 6.28908,12.50011 6.91058,16.80177c0.6215,4.30166 0.19768,18.82197 -1.84451,22.49373c-2.04219,3.67175 -9.16856,26.46825 -39.57974,26.30141c-30.41118,-0.16684 -40.95193,-16.47235 -43.62901,-20.90612c-2.67707,-4.43377 -8.96942,-27.07018 -1.70615,-38.69494c7.26326,-11.62475 14.77828,-18.93529 18.22135,-21.4865c3.44307,-2.55121 11.68253,-7.52918 25.96532,-8.60754c14.28279,-1.07836 31.5351,11.77836 38.73601,20.47246c7.20091,8.6941 10.96437,17.96355 7.86101,34.85829c-3.10336,16.89475 -16.33077,29.57849 -22.40789,33.55525c-6.07712,3.97677 -24.22581,9.43887 -44.24774,0.86314c-20.02193,-8.57572 -22.20364,-29.65559 -23.73945,-43.13346c-1.53581,-13.47786 6.26261,-24.40753 19.16787,-33.2336c12.90525,-8.82606 36.11927,-6.30334 46.98781,1.9101c10.86854,8.21344 28.34926,35.52343 11.12679,60.98589'%3E%3C/path%3E%3C/svg%3E")
      left center no-repeat;

    left: -4px;
  }
`

export const Input = styled.input`
  height: 0;
  opacity: 0;
  width: 0;

  &:checked + ${Span} {
    background-color: ${({ theme }) => theme.primary7};
  }
  &:checked + ${Span}:before {
    transform: translateX(20px) rotate(180deg);
    -webkit-transform: translateX(20px) rotate(180deg);
  }

  &:focus + ${Span} {
    box-shadow: 0 0 3px #0071de;
  }
`
