import { useState } from "react";
import Header from "../layout/header";
import AddTodoForm from "./addTodoForm";
import TodoList from "./todoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState(false);


  return (
    <div className="font-IRANSans">
      <Header />

      <AddTodoForm todos={todos} setTodos={setTodos} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        done={done}
        setDone={setDone}
      />
    </div>
  );
}

export default App;
