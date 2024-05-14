import { useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";
import { useForm, SubmitHandler } from "react-hook-form";

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
      <input
        {...register("newCategory", { required: true })}
        placeholder='Write a new category'
      />
      <button>Add</button>
    </form>
  );
}

export default NewCategory;
