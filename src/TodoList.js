import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button>Add To Do</button>
        </form>
        <ul>
            {todos.map((todo, i) => (
                <li key={i}> 
                    {todo} <button onClick={() => handleDelete(i)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList