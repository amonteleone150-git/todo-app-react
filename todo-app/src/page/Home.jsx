import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

function Home() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos || [];
  });
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // nuovo stato

  // ⭐ Salva i todo ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ⭐ Logica dei filtri
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Aggiungi un task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={addTodo}>Aggiungi</button>

      {/* ⭐ Bottoni dei filtri */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>Tutti</button>
        <button onClick={() => setFilter("active")}>Attivi</button>
        <button onClick={() => setFilter("completed")}>Completati</button>
      </div>

      <div className="todo-list">
        <TodoList
          todos={filteredTodos} // usa i todo filtrati
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default Home;
