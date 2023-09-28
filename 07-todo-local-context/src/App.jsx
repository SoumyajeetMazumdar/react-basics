import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";

function App() {
  const [todos, setTodos] = useState([]);

  //fn defines the addition of new todo to "todos"
  const addTodo = (todo) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      {
        id: Date.now(),
        ...todo,
      },
    ]);
  };

  //fn to update the todo list
  const updateTodo = (id, todo) => {
    // mapping over the oldTodos[] array
    // if the id of any element matches, replace it's content with the new one
    setTodos((oldTodos) =>
      oldTodos.map((oldtodo) => (oldtodo.id === id ? todo : oldtodo))
    );
  };

  //fn to delete todo
  const deleteTodo = (id) => {
    setTodos((oldTodos) => {
      oldTodos.filter((todoelem) => todoelem.id != id);
    });
  };

  // fn to define toggle functionality
  const toggleComplete = (id) => {
    setTodos((oldTodos) =>
      oldTodos.map((todoelem) =>
        todoelem.id === id
          ? {
              ...todoelem,
              completed: !todoelem.completed,
            }
          : todoelem
      )
    );
  };

  // to import data from localstorage when "App" is mounted
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      //checking if local "todos" contains anything
      setTodos(todos);
    }
  }, []);

  // to set the local storage whenever there is a change in todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-blue-200 shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
