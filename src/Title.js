import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  font-size: 20px;
`;

function Title(props) {
  const { text } = props;
  return <TitleDiv>{text}</TitleDiv>;
}

export default Title;
