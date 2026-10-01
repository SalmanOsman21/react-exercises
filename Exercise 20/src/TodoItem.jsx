function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 cursor-pointer"
      />

      <span
        className={`flex-1 text-base transition ${
          todo.completed
            ? "text-gray-400 line-through"
            : "text-gray-700"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="font-medium text-red-600 transition hover:text-red-800"
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;