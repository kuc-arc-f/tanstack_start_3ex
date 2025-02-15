import axios from "axios";

//const API_BASE_URL = "http://localhost:3001/api"; // バックエンドのURL
const API_BASE_URL = "/api"; // バックエンドのURL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getTodos = () => api.get("/todos/list");
export const searchTodos = (query) => api.get(`/todos/search?query=${query}`);
export const createTodo = (title) => api.post("/todos/create", { title });
//export const updateTodo = (id, title) => api.put(`/todos/${id}`, { title });
export const updateTodo = (id, title) => api.post(`/todos/update`, { title: title, id: id });
export const deleteTodo = (id) => api.post(`/todos/delete`, {id} );
