import { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: inputValue,
        completed: false,
      },
    ]);

    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div  className="min-h-screen bg-purple-100 p-4 font-sans">
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="p-8">

          <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
            My Todo List
          </h1>

          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-base outline-none focus:border-transparent focus:ring-2 focus:ring-purple-600"
              />

              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white transition hover:bg-purple-700"
              >
                Add
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-3">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>

          {todos.length === 0 && (
            <p className="mt-6 text-center text-gray-500">
              No todos yet. Add some tasks above!
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;