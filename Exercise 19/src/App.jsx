import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from './App.module.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>My Todo List</h1>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo..."
                className={styles.input}
              />
              <button type="submit" className={styles.addButton}>
                Add
              </button>
            </div>
          </form>

          <div className={styles.listContainer}>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>

          {todos.length === 0 && (
            <p className={styles.emptyMessage}>
              No todos yet. Add some tasks above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;