import React, { useState } from 'react'

import './TodoForm.css'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value)
    addTodo(value)
    setValue("")
  }

  return (
    <>
      <div className="flex flex-col justify-center text-white">
        <p className="text-center">TodoForm</p>
        <form
          className="TodoForm"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="todo-input text-center"
            placeholder="Whats is the task today ?"
            value={value}
            onChange={handleChange}
          />
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </div>
    </>
  )
}

export default TodoForm
