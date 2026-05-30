import TodoItem from "./TodoItem";

// Definisce il componente TodoList
// Riceve come props:
// - todos: array contenente tutti i task
// - toggleTodo: funzione per cambiare lo stato completato/non completato
// - deleteTodo: funzione per eliminare un task
function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    // Contenitore principale della lista
    <div>
      {/* 
        Se l'array todos è vuoto (lunghezza uguale a 0),
        mostra il messaggio "Nessun task presente."
      */}
      {todos.length === 0 && <p>Nessun task presente.</p>}

      {/*
        Cicla tutti gli elementi dell'array todos usando map()
        e crea un componente TodoItem per ogni task
      */}
      {todos.map((todo) => (
        <TodoItem
          // Chiave univoca richiesta da React per identificare ogni elemento della lista
          key={todo.id}
          // Passa il singolo oggetto todo al componente TodoItem
          todo={todo}
          // Passa la funzione per cambiare lo stato del task
          toggleTodo={toggleTodo}
          // Passa la funzione per eliminare il task
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;