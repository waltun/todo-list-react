import React from "react";
import TodoItems from "./todoItems";

function TodoList({ todos, setTodos, done, setDone }) {
  return (
    <div className="mt-5 max-w-2xl mx-auto">
      <div className="border border-gray-200 rounded-md p-4">
        <div>
          <p className="text-lg font-bold text-black">لیست کار ها</p>
        </div>
        <div className="text-sm font-bold text-center text-gray-600 border-b border-gray-300">
          <ul className="flex flex-wrap -mb-px">
            <li className="ml-2">
              <button
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  !done
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600"
                }`}
                onClick={() => setDone(false)}
              >
                کارهای در حال انجام
              </button>
            </li>
            <li className="ml-2">
              <button
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  done
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600"
                }`}
                onClick={() => setDone(true)}
              >
                کارهای انجام شده
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          {todos.length
            ? todos.map((item) => (
                <TodoItems
                  todo={item}
                  key={item.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
