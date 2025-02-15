// src/components/EditTodoDialog.js
import React, { useState, useEffect } from 'react';

function EditTodoDialog({ isOpen, onClose, todo, onUpdate }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
      onUpdate(todo.id, title);

  };

  if (!isOpen || !todo) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">TODOを編集</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full mb-4"
            placeholder="タイトル"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              onClick={onClose}
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              更新
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTodoDialog;