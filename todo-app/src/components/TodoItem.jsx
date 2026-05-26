function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      {/* Checkbox per marcare il todo come completato/non completato */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {/* Testo del todo — viene barrato quando `todo.completed` è vero */}
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginLeft: "10px",
          color: "#000",
        }}
      >
        {todo.text}
      </span>

      {/* Pulsante per eliminare il todo; chiama `deleteTodo` con l'id */}
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