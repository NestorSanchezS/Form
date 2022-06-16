import React from "react";
import styled from "styled-components";

const MySection = styled.section`
  background-color: #f6fbf4;
  border-top: 3px solid #242f9b;
  width: 500px;
  padding: 20px 25px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
`;

export const Section = ({ children }) => {
  return <MySection>{children}</MySection>;
};
