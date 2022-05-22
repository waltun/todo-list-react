import React from "react";

function TodoItems({ todo, todos, setTodos }) {
  const handleDone = (id) => {
    todo.done = !todo.done;
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos([...newTodos, { ...todo }]);
  };

  return (
    <div className="mb-4 border border-gray-300 rounded-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-md font-bold text-black">{todo.text}</p>
        </div>
        <div className="flex items-center">
          <div className="ml-2">
            <button className="text-xs bg-indigo-500 px-4 py-1 rounded-md text-white hover:bg-indigo-600">
              ویرایش
            </button>
          </div>
          <div className="ml-2">
            <button className="text-xs bg-red-500 px-4 py-1 rounded-md text-white hover:bg-red-600">
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
              onClick={() => handleDone(todo.id)}
            >
              {todo.done ? "بازگردانی" : "اتمام"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
