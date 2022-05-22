import { useState } from "react";

// import Components
import Header from "../layout/header";
import AddTodoForm from "./addTodoForm";
import TodoList from "./todoList";

// import Context
import TodosContext from "../../context/todosContext";

function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState(false);

  return (
    <>
      <TodosContext.Provider
        value={{
          todos,
          setTodos,
          done,
          setDone,
        }}
      >
        <div className="font-IRANSans">
          <Header />

          <AddTodoForm />

          <TodoList />
        </div>
      </TodosContext.Provider>
    </>
  );
}

export default App;
