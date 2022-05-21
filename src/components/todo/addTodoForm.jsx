import React from "react";

function AddTodoForm() {
  return (
    <div className="mt-10 max-w-2xl mx-auto">
      <div className="border border-gray-200 rounded-md p-4 shadow-md">
        <form>
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
