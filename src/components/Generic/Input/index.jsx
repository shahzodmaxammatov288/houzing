import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  defaultValue,
  value,
  name,
  width,
  height,
}) => {
  return (
    <Container
      onChange={onChange}
      type={type}
      width={100}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      name={name}
      width={width}
      height={height}
    />
  );
};

export default Input;
