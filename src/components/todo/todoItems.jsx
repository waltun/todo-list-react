import React, { useContext, useState } from "react";

// import Components
import EditTodoForm from "./editTodoForm";

// import Context
import TodosContext from "../../context/todosContext";

// import Axios
import axios from "axios";

function TodoItems({ todo }) {
  const todosContext = useContext(TodosContext);

  const [edit, setEdit] = useState(false);

  const handleDone = () => {
    todo.done = !todo.done;
    let newTodos = todosContext.todos.filter((item) => item.id !== todo.id);

    //HTTP request to end api (Change done todo)
    axios
      .put(`https://6283d9436b6c317d5ba74d17.endapi.io/todos/${todo.id}`, {
        done: todo.done,
      })
      .then((response) => todosContext.setTodos([...newTodos, { ...todo }]))
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    let newTodos = todosContext.todos.filter((item) => item.id !== todo.id);
    todosContext.setTodos([...newTodos]);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <EditTodoForm todo={todo} edit={edit} setEdit={setEdit} />
      ) : (
        <div className="mb-4 border border-gray-300 rounded-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-md font-bold text-black">{todo.text}</p>
            </div>
            <div className="flex items-center">
              <div className="ml-2">
                <button
                  className="text-xs bg-indigo-500 px-4 py-1 rounded-md text-white hover:bg-indigo-600"
                  onClick={handleEdit}
                >
                  ویرایش
                </button>
              </div>
              <div className="ml-2">
                <button
                  className="text-xs bg-red-500 px-4 py-1 rounded-md text-white hover:bg-red-600"
                  onClick={handleDelete}
                >
                  حذف
                </button>
              </div>
              <div className="ml-2">
                <button
                  className={`text-xs px-4 py-1 rounded-md text-white ${
                    todo.done
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  onClick={handleDone}
                >
                  {todo.done ? "بازگردانی" : "اتمام"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItems;
