import React from "react";

function TodoItems() {
  return (
    <>
      <div className="mb-4 border border-gray-300 rounded-md p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-md font-bold text-black">کار شماره یک</p>
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
              <button className="text-xs bg-yellow-500 px-4 py-1 rounded-md text-white hover:bg-yellow-600">
                اتمام
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItems;
