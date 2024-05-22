import React from "react";
import { ToDoProvider } from "./ToDoContext";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import "./App.css";

function App() {
  return (
    <ToDoProvider>
      <div className="header">To Do List</div>
      <br />
      <div className="App">
        <ToDoList />
        <ToDoForm />
      </div>
    </ToDoProvider>
  );
}

export default App;
