import React from "react";

function Header() {
  return (
    <div className="w-full rounded-b-2xl h-64 bg-indigo-600">
      <div className="flex items-center justify-center h-full">
        <div>
          <div className="mb-4">
            <h1 className="text-white text-2xl font-bold text-center">
              لیست کارها
            </h1>
          </div>
          <div className="mb-10">
            <span className="text-sm text-white text-center">
              در این بخش می توانید کارهایی که می خواهید انجام دهید را یادداشت و
              آن ها را مدیریت کنید
            </span>
          </div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-bounce text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
