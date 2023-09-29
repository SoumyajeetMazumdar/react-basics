import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-600 text-white ">
        <h1 className="">learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
