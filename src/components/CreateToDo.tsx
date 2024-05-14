import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
  margin-bottom: 15px;
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid #000;
  border-right: 0;
  border-radius: 8px 0 0 8px;
  background: transparent;
`;
const AddToDo = styled.button`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 0px 8px 8px 0;
  background: transparent;
  color: #000001;
`;

interface IForm {
  toDo: string;
}

function CreateTodo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      ...oldToDos,
      { text: toDo, id: Date.now(), category: "TO_DO" },
    ]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("toDo", { required: "Please write To Do" })}
        placeholder='Write a to do'
      />
      <AddToDo>Add</AddToDo>
    </Form>
  );
}

export default CreateTodo;
