import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const OneItem = styled.div`
  display: flex;
`;

const Lista = styled.div`
  display: flex;
  justfiy-content: space-around;
`;

const ListaInner = styled.div`
  display: flex;
  flex-direction: column;
`;

function List(props) {
  const [checkedItem, setCheckedItem] = useState();
  const { list, deleter } = props;
  function cheker(event) {
    setCheckedItem(event.target.checked);
    console.log(checkedItem);
  }
  return (
    <Lista>
      <ListaInner>
        {list.map(iterated => (
          <OneItem key={iterated.index}>
            <input type="checkbox" name={iterated?.index} onChange={cheker} />
            {iterated.text}
            <Button onclick={() => deleter(iterated?.index)} text="Törlés" />
          </OneItem>
        ))}
      </ListaInner>
    </Lista>
  );
}

export default List;
