import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { IToDo, categoryState, toDoState } from "../atoms";
import styled from "styled-components";

const CategoryList = styled.li`
  span {
    margin-right: 6px;
  }
  padding-bottom: 6px;
  button {
    background: transparent;
    margin-right: 4px;
    border-radius: 6px;
    border: 1px solid #000001;
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const categories = useRecoilValue(categoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  function removeItemAtIndex(arr: any, index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  const deleteItem = () => {
    const index = toDos.findIndex((toDo) => toDo.id === id);
    const newList = removeItemAtIndex(toDos, index);
    setToDos(newList);
  };
  return (
    <CategoryList>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name='DOING' onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name='TO_DO' onClick={onClick}>
          To do
        </button>
      )}
      {category !== "DONE" && (
        <button name='DONE' onClick={onClick}>
          Done
        </button>
      )}
      {categories.slice(3).map((item, index) => (
        <button name={item} onClick={onClick}>
          {item}
        </button>
      ))}
      <button onClick={deleteItem}>X</button>
    </CategoryList>
  );
}

export default ToDo;
