import { createFileRoute } from '@tanstack/react-router'
import React, { useState, useEffect, useRef } from 'react';
import { z } from 'zod';

// スキーマ定義
const todoSchema = z.object({
  title: z.string().min(1, { message: 'タイトルを入力してください' }),
});

export const Route = createFileRoute('/_authed/todo')({
  component: RouteComponent,
})

function RouteComponent() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]); // 検索結果用
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ id: null, title: '' });
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState(''); // 検索キーワード

  // input ref
  const titleInputRef = useRef(null);
  const searchInputRef = useRef(null);

  // ローカルストレージからTODOを読み込む
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

    // 検索機能
    useEffect(() => {
        const filtered = todos.filter((todo) =>
          todo.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredTodos(filtered);
      }, [todos, searchQuery]);


  // ローカルストレージにTODOを保存する
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    // 検索キーワードが変更された時もフィルターを更新
  }, [todos]);


  // バリデーション関数
  const validate = (data) => {
    try {
      todoSchema.parse(data);
      setErrors({}); // エラーをクリア
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors = {};
        err.errors.forEach((e) => {
          newErrors[e.path[0]] = e.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  // TODO追加
  const addTodo = () => {
    if (validate(currentTodo)) {
      const newTodo = {
        id: Date.now(),
        title: currentTodo.title,
      };
      setTodos([...todos, newTodo]);
      closeDialog();
    }
  };

    // TODO更新
    const updateTodo = () => {
      if(validate(currentTodo)) {
          const updatedTodos = todos.map((todo) =>
              todo.id === currentTodo.id ? { ...todo, title: currentTodo.title} : todo
          );
          setTodos(updatedTodos);
          closeEditDialog();
      }
    }

  // TODO削除
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // ダイアログを開く（追加）
  const openDialog = () => {
    setCurrentTodo({ id: null, title: '' }); // 新規追加なのでクリア
    setIsDialogOpen(true);
        // titleにフォーカス
        setTimeout(() => {
          titleInputRef.current?.focus();
        },100);
  };

  // ダイアログを閉じる
  const closeDialog = () => {
    setIsDialogOpen(false);
    setErrors({}); // エラーをクリア
  };

// ダイアログを開く（編集）
const openEditDialog = (todo) => {
  setCurrentTodo(todo);
  setIsEditDialogOpen(true);
  // titleにフォーカス
  setTimeout(() => {
    titleInputRef.current?.focus();
  },100);
};

  // ダイアログを閉じる（編集）
  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setErrors({}); // エラーをクリア
  };

  // 検索キーワードの変更
  const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
  };

  const displayTodos = searchQuery ? filteredTodos : todos;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>

      {/* 検索バー */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="TODOを検索..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full"
          ref={searchInputRef}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={openDialog}
      >
        TODOを追加
      </button>

      <ul>
        {displayTodos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between border-b py-2">
            <span>{todo.title}</span>
            <div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={() => openEditDialog(todo)}
              >
                編集
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => deleteTodo(todo.id)}
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* 追加ダイアログ */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">TODOを追加</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                タイトル
              </label>
              <input
                type="text"
                id="title"
                value={currentTodo.title}
                onChange={(e) => setCurrentTodo({ ...currentTodo, title: e.target.value })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.title ? 'border-red-500' : ''
                }`}
                ref={titleInputRef}
              />
              {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={addTodo}
              >
                追加
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={closeDialog}
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}

    {/* 編集用ダイアログ */}
    {isEditDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">TODOを編集</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="editTitle">
                タイトル
              </label>
              <input
                type="text"
                id="editTitle"
                value={currentTodo.title}
                onChange={(e) => setCurrentTodo({...currentTodo, title: e.target.value})}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.title ? 'border-red-500' : ''
                }`}
                ref={titleInputRef}
              />
                {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
            </div>
            <div className="flex justify-end">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={updateTodo}
              >
                更新
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={closeEditDialog}
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );    
}
