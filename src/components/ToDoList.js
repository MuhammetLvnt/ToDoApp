import React from "react";
import { useUrl } from "../contexts/UrlContext";
import { handleCompleted, handleDeleteClick } from "./ToDoListItem";

function ToDoList() {
  const { todos } = useUrl();

  const todoNotCompleted = todos?.filter((todo) => todo.completed === false);
  return (
    <div className="mt-2">
      <ul className="list-group">
        {todoNotCompleted?.map((todo) => (
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
                    <button
                      className="dropdown-item"
                      onClick={() => handleDeleteClick(todo._id)}
                    >
                      Sil
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">Düzenle</button>
                  </li>
                </ul>
              </div>
            </div>

            {/* <hr className="bg-black" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
