import React from "react";
import styled from "styled-components";

const InputSt = styled.input`
  width: 100%;
`;

function Input(props) {
  const { onchange, required, value } = props;
  return (
    <InputSt type="" onChange={onchange} required={required} value={value} />
  );
}

export default Input;
