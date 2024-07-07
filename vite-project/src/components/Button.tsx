import { Component, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export class Button extends Component<ButtonHTMLAttributes<HTMLButtonElement>> {
  render() {
    return <Button_Styled {...this.props}>{this.props.children}</Button_Styled>;
  }
}

const Button_Styled = styled.button`
  padding: 10px;

  color: rgb(84 84 110 / 90%);
  font-weight: 600;

  outline: none;
  background: #d2d4ff;
  border-radius: 6px;
  border: 2px solid #bdc3c7;

  transition: all ease-in-out 0.3s;

  cursor: pointer;

  &:hover {
    background: #5c62c6;
    color: white;
  }
`;
