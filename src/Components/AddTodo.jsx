import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput("");
        }
    };

    return (
        <form onSubmit={addTodoHandler} className="container mt-4">
            <div className="input-group mb-3">
                <input 
                        type="text" 
                    className="form-control text-light border-secondary" 
                    placeholder="Enter a Todo..." 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button className="btn btn-primary" type="submit">Add Todo</button>
            </div>
        </form>
    );
}

export default AddTodo;
