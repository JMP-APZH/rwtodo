import React, { useState } from 'react'

import './TodoForm.css'

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task)
  const handleChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(value)
    editTodo(value, task.id)
    setValue('')
  }

  return (
    <>
      <div className="flex flex-col justify-center text-white">
        <h1 className="text-center">Get that shit done !</h1>
        <form className="TodoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input text-center"
            placeholder="Update your task"
            value={value}
            onChange={handleChange}
          />
          <button type="submit" className="todo-btn">
            Save your update
          </button>
        </form>
      </div>
    </>
  )
}

export default EditTodoForm
