import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  background-color: #242f9b;
  color: white;
  border: none;
  border-radius: 3px;
  width: 80px;
  height: 35px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;

  &:hover {
    background-color: #646fd4;
  }
`;

export const Button = ({ ...props }) => {
  return <MyButton {...props}>Calcular</MyButton>;
};
