import React, { useState } from "react";
import EditTodoForm from "./editTodoForm";

function TodoItems({ todo, todos, setTodos }) {
  const [edit, setEdit] = useState(false);

  const handleDone = () => {
    todo.done = !todo.done;
    let newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos([...newTodos, { ...todo }]);
  };

  const handleDelete = () => {
    let newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos([...newTodos]);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <EditTodoForm
          todo={todo}
          edit={edit}
          setEdit={setEdit}
          todos={todos}
          setTodos={setTodos}
        />
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
