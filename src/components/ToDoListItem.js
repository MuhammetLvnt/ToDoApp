import React, { useState } from "react";
import axios from "axios";

export const handleCompleted = (id, comp, text) => {
  axios
    .put(
      `https://us-central1-todo-app-4f938.cloudfunctions.net/app/api/v1/todo/${id}`,
      { title: text, completed: comp }
    )
    .then((res) => {
      alert(
        `"${text}" görevi ${
          comp ? "yapıldı olarak işaretlendi" : "yapılmadı olarak işaretlendi"
        }`
      );
    });
};

export const handleDeleteClick = (id) => {
  axios
    .delete(
      `https://us-central1-todo-app-4f938.cloudfunctions.net/app/api/v1/todo/${id}`
    )
    .then((res) => res.data);
};

export const handleUpdate = (id, text, comp, setModal, modal) => {
  axios
    .put(
      `https://us-central1-todo-app-4f938.cloudfunctions.net/app/api/v1/todo/${id}`,
      { title: text, completed: comp }
    )
    .then((res) => {
      setModal(!modal);
    });
};

export const handleSubmit = (e) => {
  e.preventDefault();
  handleUpdate();
};

function ToDoListItem({ todos }) {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState(todos.title ? todos.title : "");
  const [completed, setCompleted] = useState(
    todos.completed ? todos.completed : false
  );

  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          checked={todos.completed}
          onClick={() => handleCompleted(todos._id, !todos.completed, text)}
        />
        <label className="w-full ml-2"> {todos.title}</label>
        <div>
          <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleDeleteClick(todos._id)}
              >
                Sil
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setModal(!modal)}
              >
                Düzenle
              </button>
            </li>
          </ul>
        </div>
      </div>

      {modal && (
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50  w-full p-4"
        >
          <div class="relative w-full h-full max-w-2xl md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <form class="p-6 space-y-6">
                <input
                  type="text"
                  value={text}
                  className="border"
                  onChange={(e) => setText(e.target.value)}
                ></input>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => setCompleted(!completed)}
                ></input>
              </form>

              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  onClick={() => setModal(!modal)}
                  class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Çık
                </button>
                <form onSubmit={handleSubmit}>
                  <button
                    data-modal-toggle="defaultModal"
                    type="button"
                    onClick={() =>
                      handleUpdate(
                        todos._id,
                        text,
                        !todos.completed,
                        setModal,
                        modal
                      )
                    }
                    class="text-gray-500 bg-white rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 "
                  >
                    Değiştir
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ToDoListItem;
