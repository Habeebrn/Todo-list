import React,{useState} from 'react'


const EditTodoForm = ({editTodo, task}) => {

  const [value, setvalue] = useState (task.task)

  const handleSubmit = e => {
      e.preventDefault ();

      editTodo (value, task.id)
      setvalue ("");


  }
  

  // console.log(value);



  return (
    <form className='TodoForm' onSubmit={handleSubmit} >

        <input type='text'
         className='Todo_input' 
         placeholder='Update Task?'
         onChange={(e)=> {setvalue(e.target.value )}}
         value={value}
         />
        <button type='submit' className='Todo_btn'>Update Task </button>
        



    </form>
  )
}

export default EditTodoForm
 