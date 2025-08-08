"use client";

import React, { useState } from "react";

const Counter = ({ onAddToList }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToList = () => {
    if (count > 0) {
      onAddToList(count);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Counter
      </h2>

      <div className="text-center mb-6">
        <div className="text-6xl font-bold text-blue-600 mb-4">{count}</div>
      </div>

      
      <div className="space-y-4">
      
        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            disabled={count === 0}
            className={`w-16 h-16 rounded-full text-2xl font-bold transition-all duration-200 ${
              count === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            }`}
          >
            -
          </button>

          <button
            onClick={increment}
            className="w-16 h-16 rounded-full text-2xl font-bold bg-green-500 hover:bg-green-600 text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            +
          </button>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2 rounded-lg font-semibold bg-gray-500 hover:bg-gray-600 text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Reset
          </button>

          <button
            onClick={addToList}
            disabled={count === 0}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              count === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            }`}
          >
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
