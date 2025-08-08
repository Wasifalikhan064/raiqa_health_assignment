"use client";
import React, { useState, useEffect } from "react";


const ListView = ({ numbers, onClearList, onRemoveNumber }) => {
  const [sortOrder, setSortOrder] = useState("none");
  const [sortedNumbers, setSortedNumbers] = useState([]);

  useEffect(() => {
    sortNumbers();
  }, [numbers, sortOrder]);

  const sortNumbers = () => {
    let sorted = [...numbers];
    if (sortOrder === "asc") {
      sorted.sort((a, b) => a - b);
    } else if (sortOrder === "desc") {
      sorted.sort((a, b) => b - a);
    }
    setSortedNumbers(sorted);
  };

  const toggleSort = () => {
    setSortOrder((prev) =>
      prev === "none" || prev === "desc" ? "asc" : "desc"
    );
  };

  const getSortButtonText = () => {
    switch (sortOrder) {
      case "asc":
        return "Sort ↑ (Ascending)";
      case "desc":
        return "Sort ↓ (Descending)";
      default:
        return "Sort";
    }
  };

  const getHighlightClass = (num) => {
    if (numbers.length <= 1) return "";
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    if (num === max && num === min) return "";
    if (num === max) return "bg-green-100 border-green-300 text-green-800";
    if (num === min) return "bg-red-100 border-red-300 text-red-800";
    return "";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Numbers List</h2>
        {numbers.length > 0 && (
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {numbers.length} item{numbers.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {numbers.length > 0 && (
        <div className="flex gap-3 mb-6">
          <button
            onClick={toggleSort}
            className="flex-1 px-4 py-2 rounded-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            {getSortButtonText()}
          </button>
          <button
            onClick={onClearList}
            className="px-4 py-2 rounded-lg font-semibold bg-red-500 hover:bg-red-600 text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Clear All
          </button>
        </div>
      )}

      <div className="space-y-2">
        {numbers.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-2">📝</div>
            <p className="text-gray-500">No numbers added yet</p>
          </div>
        ) : (
          <>
            {numbers.length > 1 && (
              <div className="flex gap-4 text-xs mb-3 justify-center">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                  <span className="text-gray-600">Highest</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-100 border border-red-300 rounded"></div>
                  <span className="text-gray-600">Lowest</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-64 overflow-y-auto">
              {sortedNumbers.map((num, index) => (
                <div
                  key={`${num}-${index}`}
                  className={`relative group p-4 rounded-xl border-2 font-semibold text-lg shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer flex items-center justify-center
        ${
          getHighlightClass(num) ||
          "bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100"
        }
      `}
                >
                  {num}

                  <button
                    onClick={() => onRemoveNumber(num)}
                    className="absolute top-1 right-1 text-xs w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    title="Remove"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListView;
