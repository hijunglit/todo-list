import { useRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const ToDoItem = styled.li`
  display: flex;
  justify-content: center;
`;
function ToDo({ text, id, category }: IToDo) {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const index = toDos.findIndex((toDo) => toDo.id === id);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteToDo = () => {
    console.log(index);
    const newList = () => {
      return [...toDos.slice(0, index), ...toDos.slice(index + 1)];
    };
    setTodos(newList);
  };
  return (
    <ToDoItem>
      <FontAwesomeIcon icon={faCarrot} />
      <div>
        <span>{text}</span>
        {category !== Categories.DOING && (
          <button name={Categories.DOING} onClick={onClick}>
            Doing
          </button>
        )}
        {category !== Categories.TO_DO && (
          <button name={Categories.TO_DO} onClick={onClick}>
            To Do
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={onClick}>
            Done
          </button>
        )}
        <button onClick={deleteToDo}>Delete</button>
      </div>
    </ToDoItem>
  );
}
export default ToDo;
