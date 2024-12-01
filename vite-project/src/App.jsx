import React from "react";
import CustomButton from "./components/CustomButton/CustomButton";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to the Custom Button</h1>
      <CustomButton text="Click Me" />
      <CustomButton text="Warning Button" warnMessage="Be careful!" />
      <CustomButton text="Hint Button" hint="This is a hint" />
    </div>
  );
};

export default App;