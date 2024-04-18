import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";

interface IAdd {
  add: string;
}
function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IAdd>();
  const categories = useRecoilValue(categoryState);
  const setCategories = useSetRecoilState(categoryState);
  const onValid = ({ add }: IAdd) => {
    if (!add) {
      return;
    }
    setCategories((prev: any) => {
      return {
        ...prev,
        [add]: [],
      };
    });
    setValue("add", "");
  };
  console.log(categories);
  return (
    <div>
      <h1>Add Category!</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("add", {
            minLength: {
              value: 1,
              message: "Write category more than 1 charactor",
            },
          })}
          placeholder='Write you own category!'
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateCategory;
