import React, { useContext, useState } from "react";

// import Context
import TodosContext from "../../context/todosContext";

// import Axios
import axios from "axios";

function EditTodoForm({ todo, setEdit }) {
  const todosContext = useContext(TodosContext);

  const [editTodo, setEditTodo] = useState(todo);

  // Get input value and set in state
  const handleInput = (event) => {
    let value = event.target.value;

    setEditTodo({ ...editTodo, text: value });
  };

  // Submit edit form and send data to api
  const handleEditForm = (event) => {
    event.preventDefault();

    todo.text = editTodo.text;
    let newTodos = todosContext.todos.filter((item) => item.id !== todo.id);

    // HTTP request to end api (Edit todo)
    axios
      .put(`https://6283d9436b6c317d5ba74d17.endapi.io/todos/${todo.id}`, {
        text: editTodo.text,
        done: editTodo.done,
      })
      .then((response) => todosContext.setTodos([...newTodos, { ...todo }]))
      .catch((error) => console.log(error));

    setEdit(false);
  };

  return (
    <div className="mb-4 border border-gray-300 rounded-md p-4">
      <form
        className="flex items-center justify-between"
        onSubmit={handleEditForm}
      >
        <div>
          <input
            type="text"
            className="w-full bg-white rounded-md border border-gray-400 px-4 py-2 text-sm"
            value={editTodo.text}
            onChange={handleInput}
            name="text"
          />
        </div>
        <div className="flex items-center">
          <div className="ml-2">
            <button
              className="text-xs bg-green-500 px-4 py-1 rounded-md text-white hover:bg-green-600"
              type="submit"
            >
              ثبت اطلاعات
            </button>
          </div>
          <div className="ml-2">
            <button
              type="button"
              className="text-xs bg-red-500 px-4 py-1 rounded-md text-white hover:bg-red-600"
              onClick={() => setEdit(false)}
            >
              انصراف
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditTodoForm;
