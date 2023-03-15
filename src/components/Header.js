import React from "react";
import ToDoAdd from "./ToDoAdd";

function Header() {
  return (
    <div className="container rounded-md mt-5 border">
      <label className="grid justify-items-center mt-3">ToDo App</label>
      <hr className="bg-black my-3" />
      <ToDoAdd />
    </div>
  );
}

export default Header;
