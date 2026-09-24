import React from "react";
import HomePage from "./Page/HomePage";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
      <div className="mb-28  lg:mb-0">
        <Navbar />
      </div>
      <HomePage />
    </div>
  );
};

export default App;
