import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="tapp-conten">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
