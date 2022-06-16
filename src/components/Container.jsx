import React from "react";
import styled from "styled-components";

const MyContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
export const Container = ({ children }) => {
  return <MyContainer>{children}</MyContainer>;
};
