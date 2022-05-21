import { useState } from "react";
import Header from "../layout/header";
import AddTodoForm from "./addTodoForm";
import TodoList from "./todoList";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  return (
    <div className="font-IRANSans">
      <Header />

      <AddTodoForm todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
