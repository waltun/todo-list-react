import React from "react";

function TodoList() {
  return (
    <div className="mt-5 max-w-2xl mx-auto">
      <div className="border border-gray-200 rounded-md p-4">
        <p className="text-lg font-bold text-black">لیست کار ها</p>

        <div className="text-sm font-bold text-center text-gray-600 border-b border-gray-300">
          <ul className="flex flex-wrap -mb-px">
            <li className="ml-2">
              <button className="inline-block text-blue-600 p-4 rounded-t-lg border-b-2 border-blue-600">
                کارهای در حال انجام
              </button>
            </li>
            <li className="ml-2">
              <button className="inline-block p-4 text-gray-600 rounded-t-lg border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600">
                کارهای انجام شده
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;