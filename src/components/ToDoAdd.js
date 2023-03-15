import React, { useState } from "react";
import { useUrl } from "../contexts/UrlContext";
import axios from "axios";

function ToDoAdd() {
  const [text, setText] = useState("");
  const { url } = useUrl();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.length > 3) {
      await axios.post(url, { title: text }).then((res) => {
        setText("");
        alert("başarı ile eklendi");
      });
    } else {
      alert("lütfen 3 karakterden fazla giriniz.");
    }
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="görev giriniz."
          className="border p-2 w-11/12 rounded-md"
          value={text}
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button type="submit" className="w-1/12 h-[42px] border rounded-md">
          Ekle
        </button>
      </form>
    </div>
  );
}

export default ToDoAdd;
