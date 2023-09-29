import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      /* state : current object/state that needs to be modified (here, existing todoList)
       * action : how the state is to be modified (new todo that needs to be added) */

      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todoelem) => todoelem.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      // console.log(state, action);
      state.todos = state.todos.map((todoelem) => {
        if (todoelem.id === action.payload) {
          return { ...todoelem, text: "UPDATED TEXT" };
        }
        return todoelem;
      });
    },
  },
});

// exporting these individual functionalities to be used directly
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// since this is a restrictive store, it can only use the registered values to perform actions
export default todoSlice.reducer;
