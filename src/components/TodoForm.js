import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();

    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue('');
    }
  }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='PLease mention your task' 
        onChange={(e) => setValue(e.target.value)} value={value}/>
        <button type='submit' className='todo-btn'>Add task</button>
      </form>
    </div>
  )
}

export default TodoForm
