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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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

          {loading ? (
            <div className="fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm flex items-center justify-center">
              <div className="w-14 h-14 rounded-full shadow-md flex items-center justify-center border border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <TodoList />
          )}
        </div>
      </TodosContext.Provider>
    </>
  );
}

export default App;
