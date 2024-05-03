import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import { useState } from "react";

interface IAdd {
  add: string;
}
function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IAdd>();
  const [categories, setCategories] = useRecoilState(categoryState);
  const onValid: SubmitHandler<IAdd> = (add: any) => {
    setCategories((prev) => {
      return {
        ...prev,
        add,
      };
    });
    setValue("add", "");
  };
  console.log(categories);
  return (
    <div>
      <h1>Add your own Category!</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("add", { minLength: 1 })} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateCategory;
