import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
const defaultCategories: string[] = ["TO_DO", "DOING", "DONE"];

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryState = atom({
  key: "category",
  default: defaultCategories[0],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const todoStoreKey = "ToDo";
      const savedValue = localStorage.getItem(todoStoreKey);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, oldValue, isReset) => {
        isReset
          ? localStorage.removeItem(todoStoreKey)
          : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoselector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
