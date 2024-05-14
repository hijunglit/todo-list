import { atom, useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateToDo";
import { categoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";
import NewCategory from "./NewCategory";
import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
`;
const Title = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 50px;
`;
const FormContainer = styled.div`
  margin-bottom: 50px;
`;
const ToDoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;
const ToDoBox = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid #000001;
  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(34, 7, 21, 0.8);
`;
const ToDoTitle = styled.h2`
  font-family: "Pacifico", cursive;
  text-transform: uppercase;
  margin: 10px 0;
`;
const ToDosList = styled.ul`
  list-style: square;
  margin: 0 auto;
  width: fit-content;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const category = useRecoilValue(categoryState);
  return (
    <Wrapper>
      <Title>To Dos</Title>
      <FormContainer>
        <CreateTodo />
        <NewCategory />
      </FormContainer>
      <ToDoContainer>
        {category.map((category, index) => (
          <ToDoBox key={index}>
            <ToDoTitle>{category}</ToDoTitle>
            <ToDosList>
              {toDos
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <ToDo key={index} {...item} />
                ))}
            </ToDosList>
          </ToDoBox>
        ))}
      </ToDoContainer>
    </Wrapper>
  );
}

export default ToDoList;
