import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Ara's To-Do List</h1>
      </header>

      {/* by passing setInputText={setInputText} prop. its like importing that thing into form comp */}
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
