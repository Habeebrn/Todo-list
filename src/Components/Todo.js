import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';


const Todo = ({task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo' >
      <p onClick={ () => toggleComplete( task.id )} className= {`${task.completed ? "completed" : "" }`} >{task.task}</p>
      <div>
        <BorderColorIcon color='primary' onClick={()=> editTodo(task.id) }  />
        <DeleteForeverIcon color='error'  onClick={()=>deleteTodo(task.id)}/>


      </div>
    </div>
  )
}

export default Todo
