import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";

interface IAdd {
  add: string;
}
function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IAdd>();
  const category = useRecoilValue(categoryState);
  const setCategory = useSetRecoilState(categoryState);
  const onVaild: SubmitHandler<IAdd> = (data) => {
    console.log("");
  };
  return (
    <div>
      <h1>Add your own Category!</h1>
      <form onSubmit={handleSubmit(onVaild)}>
        <input {...register("add", { minLength: 1 })} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateCategory;
