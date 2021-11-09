import React from "react";

const Todo = (props) => {
  //todo.filter goes through all the elements in the list and removes the one that matched id??
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            //add all the other properties and only modify completed
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      {/* the ternary operator looks at completed value if its true. it adds completed class to it. else it does not add anything */}
      <li className={`todo-item  ${props.todo.completed ? "completed" : ""}`}>
        {props.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
