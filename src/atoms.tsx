import { atom, selector } from "recoil";
import { v1 } from "uuid";

export interface IToDo {
  text: string;
  id: number;
  category: string;
}
export interface ICategories {
  category: string;
}
export interface ICategories extends Array<ICategories> {}

export const categoryState = atom({
  key: `category/${v1()}`,
  default: ["TO_DO", "DOING", "DONE"],
  effects: [
    ({ setSelf, onSet }) => {
      const key = "categories";
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoState = atom<IToDo[]>({
  key: `toDos/${v1()}`,
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const key = "ToDo";
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, oldValue, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoSelector = selector({
  key: `toDoSelector/${v1()}`,
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos;
  },
});
