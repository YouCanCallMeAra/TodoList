import React from "react";

const Form = (props) => {
  //here i can write js code or funcs
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    //get the target input value and give it to setInpTex prop
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    //prevent refreshing
    e.preventDefault();

    //get the todos state from app.js and give it value of objects
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //after we submit the task clear input field
    props.setInputText("");
  };

  /////////
  return (
    <form>
      <input
        //always have the value of input text. so when input clears in background it should also clear in gui
        value={props.inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
