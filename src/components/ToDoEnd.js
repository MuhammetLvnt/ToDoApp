import React from "react";
import { useUrl } from "../contexts/UrlContext";
import { handleCompleted } from "./ToDoListItem";

function ToDoEnd() {
  const { todos } = useUrl();

  const todoCompleted = todos?.filter((todo) => todo.completed === true);

  return (
    <div className="mt-2">
      <ul className="list-group">
        {todoCompleted?.map((todo) => (
          <li className="list-group-item">
            <div className="flex">
              <input
                type="checkbox"
                checked={todo.completed}
                onClick={() =>
                  handleCompleted(todo._id, !todo.completed, todo.title)
                }
              />
              <label className="w-full ml-2"> {todo.title}</label>
              <div>
                <button
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">Sil</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Düzenle</button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoEnd;
