import React from "react";
import styled from "styled-components";

const Result = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const Balance = ({ children }) => {
  return <Result>{children}</Result>;
};
