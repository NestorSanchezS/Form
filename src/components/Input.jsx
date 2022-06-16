import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const Control = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: 5px;
`;

const MyInput = styled.input`
  outline: none;
  padding: 10px;
  border: solid 1px #e0deca;
  border-radius: 15px;
  width: 100%;
  margin: 3px 0px;
`;

const ErrorMessage = styled.div`
  color: #990000;
  font-size: 12px;
`;
export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Control>
      <Label>{label}</Label>
      <MyInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </Control>
  );
};
