import React from "react";

//import Package
import { CogIcon } from "@heroicons/react/solid";

function Loading() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm flex items-center justify-center">
      <div className="w-14 h-14 rounded-full shadow-md flex items-center justify-center border border-gray-300">
        <CogIcon className="h-8 w-8 animate-spin" />
      </div>
    </div>
  );
}

export default Loading;
