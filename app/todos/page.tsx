"use client";
import React, { FormEvent, useRef, useState } from "react";
import "./index.css";
const Todos = () => {
  const [input, setInput] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInput("");
    if (input) {
      setList((prev) => {
        return [...prev, input];
      });
    }
  }
  function handleInputChange(event: any) {
    setInput(event.target.value);
  }
  const [list, setList] = useState<Array<string>>([]);
  return (
    <>
      <form className="todo-form" onSubmit={submit}>
        <input
          placeholder="Add todo"
          value={input}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Add Todo</button>
      </form>
      {list.length > 0 && (
        <section className="list-wrapper">
          <ul className="list">
            {list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Todos;
