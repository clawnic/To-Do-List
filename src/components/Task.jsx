import React, { useState } from 'react'
import './task.css'


const Task = ({task,onDelete}) => {
  
  const [isCheck ,setisCheck] = useState(false);
  const handleChange = ()=>{
    setisCheck(!isCheck);
  }



  return (
    <div className='task-card'>
      <div className={`custom-checkbox ${isCheck ? 'checked' : ''}`} onClick={handleChange}></div>
      <span
        className={isCheck ? 'task-text checked' : 'task-text'}
      >
      {task}
      </span>

      <button class="button" onClick={onDelete}>
        <span class="X"></span>
        <span class="Y"></span>
        <div class="close">Close</div>
      </button>

      


    </div>
  )
}

export default Task
