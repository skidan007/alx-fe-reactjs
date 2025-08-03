import React from "react";
import SearchBar from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        GitHub User Search
      </h1>
      <SearchBar />
    </div>
  );
}

export default App;
