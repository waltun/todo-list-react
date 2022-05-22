import React, { useContext } from "react";

// import Components
import TodoItems from "./todoItems";

//import Context
import TodosContext from "../../context/todosContext";

function TodoList({ edit, setEdit }) {
  const todosContext = useContext(TodosContext);

  let doneTodos = todosContext.todos.filter(
    (item) => item.done === todosContext.done
  );

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
                  !todosContext.done
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600"
                }`}
                onClick={() => todosContext.setDone(false)}
              >
                کارهای در حال انجام (
                {
                  todosContext.todos.filter((item) => item.done === false)
                    .length
                }
                )
              </button>
            </li>
            <li className="ml-2">
              <button
                className={`inline-block p-4 rounded-t-lg border-b-2 ${
                  todosContext.done
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600"
                }`}
                onClick={() => todosContext.setDone(true)}
              >
                کارهای انجام شده (
                {todosContext.todos.filter((item) => item.done === true).length}
                )
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          {doneTodos.length ? (
            doneTodos.map((item) => (
              <TodoItems
                todo={item}
                key={item.id}
                edit={edit}
                setEdit={setEdit}
              />
            ))
          ) : (
            <p className="text-sm text-center font-bold">
              چیزی برای نمایش وجود ندارد...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
