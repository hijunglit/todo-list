import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoselector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";
import SelectCategory from "./SelectToDo";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;
const Item = styled.div`
  margin-bottom: 20rem;
`;
const Title = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 50px;
`;
const ToDos = styled.ul``;

function ToDoList() {
  const toDos = useRecoilValue(toDoselector);
  return (
    <Container>
      <Item>
        <Title>to do list</Title>
        <SelectCategory />
        <CreateToDo />
        <ToDos>
          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ToDos>
        <CreateCategory />
      </Item>
    </Container>
  );
}

export default ToDoList;
