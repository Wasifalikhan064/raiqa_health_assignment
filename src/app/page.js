"use client";

import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import ListView from "./components/ListView";

export default function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const savedNumbers = localStorage.getItem("counter-app-numbers");
    if (savedNumbers) {
      try {
        setNumbers(JSON.parse(savedNumbers));
      } catch (error) {
        console.error("Error loading saved numbers:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter-app-numbers", JSON.stringify(numbers));
  }, [numbers]);

  const addToList = (number) => {
    if (!numbers.includes(number)) {
      setNumbers((prev) => [...prev, number]);
    }
  };

  const clearList = () => {
    setNumbers([]);
  };

  const onRemoveNumber = (numberToRemove) => {
    setNumbers((prev) => prev.filter((num) => num !== numberToRemove));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-600 via-blue-600 to-blue-800 bg-clip-text text-transparent">
            Counter & List App
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-8">
          <Counter onAddToList={addToList} />

          <ListView
            numbers={numbers}
            onClearList={clearList}
            onRemoveNumber={onRemoveNumber}
          />
        </div>
      </div>
    </div>
  );
}
