import { createContext, useContext } from "react";

// todo context, with default values as given below
export const TodoContext = createContext({
  todos: [{}],
  addTodo: (todo) => {
    /* defined in different file */
  },
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// to simplify usage, and not write useContext everywhere
export const useTodo = () => {
  return useContext(TodoContext);
};

// wrapper assigned to variable to not use ".Provider" in component form
export const TodoProvider = TodoContext.Provider;
