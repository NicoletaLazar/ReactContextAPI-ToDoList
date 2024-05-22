import { useCallback, useContext, useState } from "react";
import { ToDoContext } from "./ToDoContext";

function ToDoForm(props) {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useContext(ToDoContext);

  const handleInputChange = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    if ("" === title || undefined === title) {
      alert("Field cannot be blank");
      return;
    }
    const newTodos = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodos]);
    setTitle("");
  };

  return (
    <>
      <div className="footer">
        <form id="form-1" onSubmit={addTodo}>
          <input
            size="md"
            variant="filled"
            type="text"
            placeholder="Enter task here"
            onChange={(e) => handleInputChange(e)}
            value={title}
            maxlength="25"
            id="task"
            autocomplete="on"
            autofocus
          />
          <input className="add-button" type="submit" value="Add task" />
        </form>
      </div>
    </>
  );
}

export default ToDoForm;
