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

    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%20100%20100'%3E%3Cpath%20fill%3D'%230071de'%20d%3D'M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89%20c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837%20c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079%20c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826%20c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371%20c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262%20c0.643,4.698,0.646,10.775-3.811,13.746'%3E%3C/path%3E%3C/svg%3E")
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
