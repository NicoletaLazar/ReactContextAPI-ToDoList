import React, { useContext, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoContext } from "./ToDoContext";

const ToDoList = () => {
  const [todos, setTodos] = useContext(ToDoContext);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function checkboxhandler(e) {
    //isSelected = Boolean
    let isSelected = e.target.checked;
    let allChecked = todos.map((item) => {
      item.completed = isSelected;
      return item;
    });
    setTodos(allChecked);
  }

  function selectedItems() {
    for (let i = 0; i < todos.length; i++) {
      console.log(todos[i].completed);
      if (todos[i].completed === false) {
        return false;
      }
    }
    return true;
  }
  // scrie o functie care returneaza true daca toate itemurile din lista
  // sunt selectate (completed == true) si fals in cazul in care macar un item este neselctat

  function deleteCheckedTodo(e) {
    const unselectedTodo = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed === false) {
        unselectedTodo.push(todos[i]);
      }
    }
    setTodos(unselectedTodo);
  }

  return (
    <div className="container">
      <input
        type="checkbox"
        id="checked"
        name="items"
        value="Todos"
        checked={selectedItems()}
        onChange={(e) => checkboxhandler(e)}
      ></input>
      <input
        type="button"
        value="Delete"
        className="delete-button"
        onClick={(e) => deleteCheckedTodo(e)}
      />
      {todos.map((item) => (
        <ToDoItem key={item.id} todo={item}></ToDoItem>
      ))}
    </div>
  );
};
export default ToDoList;
