import { useState, useEffect } from "react";

// import Components
import Header from "../layout/header";
import AddTodoForm from "./addTodoForm";
import TodoList from "./todoList";
import Loading from "../layout/loading";

// import Context
import TodosContext from "../../context/todosContext";

// import Axios
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  //Get all todos from API and set in state when app loaded
  useEffect(() => {
    setLoading(true);

    //HTTP request to end api (Get todos)
    axios
      .get("https://6283d9436b6c317d5ba74d17.endapi.io/todos")
      .then((response) => {
        setTodos(response.data.data);
        setLoading(false);
      })
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

          {loading ? <Loading /> : <TodoList />}
        </div>
      </TodosContext.Provider>
    </>
  );
}

export default App;
