import React, { useContext, useState } from "react";

// import Context
import TodosContext from "../../context/todosContext";

// import Axios
import axios from "axios";

function AddTodoForm() {
  const [todo, setTodo] = useState({
    id: "",
    text: "",
    done: false,
  });

  // Context
  const todosContext = useContext(TodosContext);

  const handleInput = (event) => {
    let value = event.target.value;

    setTodo({ ...todo, text: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Check length of text
    if (todo.text.length > 2) {
      todosContext.setTodos([
        ...todosContext.todos,
        { ...todo, id: Date.now() },
      ]);
      // HTTP request to end api (Store user)
      axios
        .post("https://6283d9436b6c317d5ba74d17.endapi.io/todos", {
          text: todo.text,
          done: todo.done,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      todo.text = "";
    }
  };

  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <div className="border border-gray-200 rounded-md p-4 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="text-sm text-black block mb-2 font-bold"
              htmlFor="inputText"
            >
              افزودن کار جدید
            </label>
            <input
              type="text"
              id="inputText"
              name="text"
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-400"
              placeholder="کار مورد نظر خود را بنویسید"
              onChange={handleInput}
              value={todo.text}
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-green-500 text-sm font-bold px-8 py-2 rounded-md text-white hover:bg-green-600">
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodoForm;
