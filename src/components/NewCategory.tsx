import { useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: 1px solid #000;
  border-right: 0;
  border-radius: 8px 0 0 8px;
  background: transparent;
`;
const AddCate = styled.button`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 0px 8px 8px 0;
  background: transparent;
  color: #000001;
`;

interface ICategory {
  newCategory: string;
}

function NewCategory() {
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();
  const onSubmit = ({ newCategory }: ICategory) => {
    setCategory((oldCategory) => [...oldCategory, newCategory]);
    setValue("newCategory", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("newCategory", { required: true })}
        placeholder='Write a new category'
      />
      <AddCate>Add</AddCate>
    </form>
  );
}

export default NewCategory;
