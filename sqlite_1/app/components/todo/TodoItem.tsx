import React from "react";

function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <li className="flex items-center justify-between py-2 border-b">
      <span>{todo.title}</span>
      <div>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
          onClick={() => onEdit(todo)}
        >
          編集
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => onDelete(todo.id)}
        >
          削除
        </button>
      </div>
    </li>
  );
}

export default TodoItem;