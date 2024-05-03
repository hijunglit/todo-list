import { useRecoilState } from "recoil";
import { categoryState } from "../atoms";

function SelectCategory() {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <select value={category[0]} onInput={onInput}>
      {category.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
      {/* <option value='TO_DO'>To Do</option>
      <option value='DOING'>Doing</option>
      <option value='DONE'>Done</option> */}
    </select>
  );
}

export default SelectCategory;
