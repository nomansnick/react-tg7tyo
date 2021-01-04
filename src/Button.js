import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.button`
  background-color: red;
  border-radius: 10px;
`;

function Button(props) {
  const { text, onclick } = props;
  return <ButtonDiv onClick={onclick}> {text} </ButtonDiv>;
}

export default Button;
