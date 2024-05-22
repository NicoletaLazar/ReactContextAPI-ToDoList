import { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
  const getTodos = JSON.parse(localStorage.getItem("todos"));
  const initialTodos = [
    {
      id: 1,
      title: "Wake-up at 7",
      completed: true,
    },
    {
      id: 2,
      title: "Take a shower",
      completed: false,
    },
    {
      id: 3,
      title: "Eat healthy breakfast",
      completed: false,
    },
    {
      id: 4,
      title: "Go to gym",
      completed: true,
    },
    {
      id: 5,
      title: "Walk the dog",
      completed: false,
    },
  ];

  // nulable values
  const [todos, setTodos] = useState(
    getTodos && getTodos.length > 0 ? getTodos : initialTodos
  );
  return (
    <ToDoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </ToDoContext.Provider>
  );
};
