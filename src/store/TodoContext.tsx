import React, { useContext } from "react";
import { todoStore } from "../store/TodoStore";

export const TodoContext = React.createContext(todoStore);

export const useTodoStore = () => {
  const store = useContext(TodoContext);
  if (!store) {
    throw new Error("useTodoStore must be used within a TodoProvider");
  }

  return store;
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
  );
};
