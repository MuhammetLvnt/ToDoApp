import React from "react";
import { useUrl } from "../contexts/UrlContext";

function ToDoComplete() {
  const { todos } = useUrl();
  return (
    <div className="flex">
      <input type="checkbox"></input>
      <label>{todos.title}</label>
    </div>
  );
}

export default ToDoComplete;
