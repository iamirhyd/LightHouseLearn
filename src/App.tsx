import React from "react";
import HomePage from "./Page/HomePage";
import { div } from "motion/react-client";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
