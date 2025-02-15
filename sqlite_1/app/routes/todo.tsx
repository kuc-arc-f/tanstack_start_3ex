import { createFileRoute } from '@tanstack/react-router'
import React, { useState, useEffect } from "react";
import TodoList from "../components/todo/TodoList";
import AddTodoDialog from "../components/todo/AddTodoDialog";
import EditTodoDialog from "../components/todo/EditTodoDialog";
//import SearchTodo from "./todo/SearchTodo";
import { getTodos, createTodo, updateTodo, deleteTodo , searchTodos} from "../utils/todo";
import { z } from "zod";

// Zod スキーマ
const todoSchema = z.object({
  title: z.string().min(1, { message: "タイトルを入力してください" }),
});

export const Route = createFileRoute('/todo')({
  component: RouteComponent,
})

function RouteComponent() {
  const [todos, setTodos] = useState([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");


  // TODOリスト取得
  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      console.log(response.data);
      setTodos(response.data.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };


    // TODO検索
    const handleSearch = async (query) => {
        setSearchQuery(query); // 検索語句をステートに保存
        try {
            const response = await searchTodos(query);
            setTodos(response.data); // 検索結果でTODOリストを更新
        } catch (error) {
            console.error("検索中にエラーが発生しました:", error);
        }
    };

  // TODO追加
  const handleAddTodo = async (title) => {
    try {
      // バリデーション
      todoSchema.parse({ title });
      const response = await createTodo(title);
      setTodos([...todos, response.data]);
      setAddDialogOpen(false);
      location.reload();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Zod のバリデーションエラー
        alert(error.errors[0].message);
      } else {
        console.error("Error adding todo:", error);
        alert("TODOの追加に失敗しました");
      }
    }
  };

  // TODO更新
  const handleUpdate = async (id, title) => {
    try {
      // バлиデーション
      todoSchema.parse({ title });
      const response = await updateTodo(id, title);
      setTodos(
        todos.map((todo) => (todo.id === id ? response.data : todo))
      );
      setEditDialogOpen(false);
      setSelectedTodo(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
          alert(error.errors[0].message); // Zodのエラーメッセージを表示
      } else {
          console.error("Error updating todo:", error);
          alert("TODOの更新に失敗しました");
      }
    }
  };

  // TODO削除
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
      alert("TODOの削除に失敗しました");
    }
  };

  // 初期表示時TODOリスト取得
  useEffect(() => {
    fetchTodos();
  }, []);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setAddDialogOpen(true)}
      >
        TODOを追加
      </button>

      <TodoList
        todos={todos}
        onEdit={(todo) => {
          setSelectedTodo(todo);
          setEditDialogOpen(true);
        }}
        onDelete={handleDelete}
      />

      <AddTodoDialog
        isOpen={addDialogOpen}
        onClose={() => setAddDialogOpen(false)}
        onAdd={handleAddTodo}
      />

      <EditTodoDialog
        isOpen={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        todo={selectedTodo}
        onUpdate={handleUpdate}
      />

    </div>
  );
}