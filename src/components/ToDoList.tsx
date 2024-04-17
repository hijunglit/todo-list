import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import React from "react";
import { useForm } from "react-hook-form";

interface ICategory {
  mkcat: string;
}
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const handleValid = ({ mkcat }: ICategory) => {};

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("mkcat", {
            required: "write your new category",
          })}
          placeholder='Write a new category'
        />
        <button>Add</button>
      </form>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
