function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginLeft: "10px",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: "auto", color: "red" }}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;