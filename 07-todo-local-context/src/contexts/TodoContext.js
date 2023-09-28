import { createContext, useContext } from "react";

// todo context, with default values as given below
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg 1",
      completed: false,
    },
    {
      id: 2,
      todo: "Todo msg 2",
      completed: false,
    },
  ],
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
