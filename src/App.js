import React, { useState } from "react";
import "./style.css";
import styled from "styled-components";
import Title from "./Title";
import Form from "./Form";
import List from "./List";

const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default function App() {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  let [text, setText] = useState("");

  function onchange(event) {
    setText(event.target.value);
  }

  function add(event) {
    event.preventDefault();
    setIndex(index + 1);
    const Item = {
      text: text,
      index: index
    };
    const newList = [Item].concat(list);
    setList(newList);
    setText("");
  }

  function delItem(index) {
    const newList = list.filter(item => item.index !== index);
    setList(newList);
  }

  return (
    <FrameDiv>
      <Title text="Todo App" />
      <Form submit={add} onchange={onchange} value={text} />
      <CenterDiv>
        <List list={list} deleter={delItem} />
      </CenterDiv>
    </FrameDiv>
  );
}
