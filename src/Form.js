import React from "react";
import styled from "styled-components";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const FormSt = styled.form`
  display: flex;
`;

function Form(props) {
  const { onchange, submit, value } = props;
  return (
    <FormSt onSubmit={submit}>
      <Input required={true} onchange={onchange} value={value} />
      <SubmitButton text="Hozzáad" />
    </FormSt>
  );
}

export default Form;
