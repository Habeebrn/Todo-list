import React,{useState} from 'react'


const TodoForm = ({addTodo}) => {

  const [value, setvalue] = useState ("")

  const handleSubmit = e => {
      e.preventDefault ();

      addTodo(value)
      
      setvalue("");


  }
  

  // console.log(value);



  return (
    <form className='TodoForm' onSubmit={handleSubmit} >

        <input type='text'
         className='Todo_input' 
         placeholder='what is the task today?'
         onChange={(e)=> {setvalue(e.target.value )}}
         value={value}
         />
        <button type='submit' className='Todo_btn'>Add Task </button>
        



    </form>
  )
}

export default TodoForm
