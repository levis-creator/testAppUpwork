import React from "react";

const Failed = ({ onClick }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button
        onClick={onClick}
        className="bg-blue-600 px-4 py-3 rounded-md text-white"
      >
        Click to reload
      </button>
    </div>
  );
};

export default Failed;
