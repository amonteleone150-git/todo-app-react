import Home from "./page/Home";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>

      <main className="app-main">
        <Home />
      </main>
    </div>
  );
}

export default App;