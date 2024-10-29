import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoList = ({todo,removeTodo}) => {
  const deleteTost =()=> toast(`Your {todo} Task has been deleted and completed 🎉🎉🎉`)
  return (
    <div className=' text-white text-3xl grid place-content-center flex-col mt-2 cursor-pointer'>
        <h1 className=' w-96 h-10 outline-dotted rounded-lg flex justify-center items-center font-[mood] uppercase text-xl mt-2'
        onClick={removeTodo}
        
        >{todo}</h1>
        <ToastContainer/>
    </div>
  )
}

export default TodoList;