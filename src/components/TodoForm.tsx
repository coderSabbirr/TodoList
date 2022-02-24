import React, { ChangeEvent, FormEvent, useState } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <p style={{ textAlign: "left", paddingLeft: "20px" }}>
        Task <i className="fas fa-chevron-down" />
      </p>
      <form className="todo-form">
        <input
          type="text"
          value={newTodo}
          className="todo-input"
          placeholder="Add a todo"
          onChange={handleChange}
        />
        <button type="submit" className="todo-button" onClick={handleSubmit}>
          <i className="fas fa-plus"></i> Add
        </button>
      </form>
    </div>
  );
};
