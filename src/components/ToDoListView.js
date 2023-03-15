import React from "react";
import { useUrl } from "../contexts/UrlContext";
import ToDoListItem from "./ToDoListItem";

function ToDoListView() {
  const { todos } = useUrl();

  return (
    <div className="mt-2">
      <ul className="list-group">
        {todos?.map((todos) => (
          <li className="list-group-item">
            <ToDoListItem todos={todos} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoListView;
