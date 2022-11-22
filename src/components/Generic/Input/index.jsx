import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      type,
      onChange,
      placeholder,
      defaultValue,
      value,
      name,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          name={name}
          width={width}
          height={height}
          icon={icon}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

export default Input;
