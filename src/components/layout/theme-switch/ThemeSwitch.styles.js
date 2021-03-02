import styled from "styled-components"

export const Container = styled.div`
  height: 24px;
  width: 44px;
  display: block;
  float: left;
  margin: 0 10px 0 0;
  position: relative;
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  display: block;
  width: 44px;
  height: 24px;
  margin: 0 auto;
  transform: translateY(-50%);
  cursor: pointer;

  &:before {
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    border: 2px solid #143240;
    background: ${({ theme }) => theme.primary7};
  }

  &:after {
    top: 0;
    right: 0;
    width: 44px;
    height: 24px;
    border: 2px solid #143240;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50px;
    box-sizing: border-box;
    transition: 0.8s ease top, 0.8s ease left, 0.8s ease right, 0.8s ease width,
      0.8s ease height, 0.8s ease border-color, 0.8s ease background;
  }
`

export const Switch = styled.input`
  display: none;

  &:checked + ${Label}:before {
    top: 0;
    left: 0;
    width: 44px;
    height: 24px;
    border-color: #143240;
    background: transparent;
  }

  &:checked + ${Label}:after {
    top: 3px;
    right: 3px;
    width: 18px;
    height: 18px;
    border-color: #143240;
    background: ${({ theme }) => theme.primary7};
  }
`
