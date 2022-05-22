import { useState, useEffect } from "react";

// import Components
import Header from "../layout/header";
import AddTodoForm from "./addTodoForm";
import TodoList from "./todoList";

// import Context
import TodosContext from "../../context/todosContext";

// import Axios
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    axios
      .get("https://6283d9436b6c317d5ba74d17.endapi.io/todos")
      .then((response) => setTodos(response.data.data))
      .catch((error) => console.log(error));
  }, []);

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
