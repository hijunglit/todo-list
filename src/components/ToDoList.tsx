import { atom, useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateToDo";
import { categoryState, toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";
import NewCategory from "./NewCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const category = useRecoilValue(categoryState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateTodo />
      <NewCategory />
      {category.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {toDos
              .filter((item) => item.category === category)
              .map((item, index) => (
                <ToDo key={index} {...item} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
