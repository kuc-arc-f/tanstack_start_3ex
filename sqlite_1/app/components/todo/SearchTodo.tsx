// src/components/SearchTodo.js
import React, { useState } from 'react';

const SearchTodo = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // デフォルトのフォーム送信を防ぐ
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="TODOを検索..."
                value={query}
                onChange={handleInputChange}
                className="border p-2 rounded"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
                検索
            </button>
        </form>
    );
};

export default SearchTodo;