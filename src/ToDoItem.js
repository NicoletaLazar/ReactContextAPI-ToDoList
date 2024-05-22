import React from "react";
import { useContext, useEffect } from "react";
import { ToDoContext } from "./ToDoContext";

const ToDoItem = (props) => {
  const [todos, setTodos] = useContext(ToDoContext);

  useEffect(() => {
    // console.log(props);
  }, [todos]);

  const completeTodo = (id) => {
    const filterTodos = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    console.log(id);
    setTodos(filterTodos);
  };

  console.log(props);
  return (
    <div className="main">
      <label className={props.todo.completed === true ? "linethrough" : ""}>
        <input
          checked={props.todo.completed}
          type="checkbox"
          id="smchecked"
          value=""
          onChange={() => completeTodo(props.todo.id)}
        />
        {" " + props.todo.id + ". " + props.todo.title}
      </label>
    </div>
  );
};

export default ToDoItem;
