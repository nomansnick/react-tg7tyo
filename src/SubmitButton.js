import React from "react";
import styled from "styled-components";

const Gomb = styled.button`
  max-height: 20vh;
`;

function SubmitButton(props) {
  const { text } = props;
  return <Gomb type="submit"> {text} </Gomb>;
}

export default SubmitButton;
