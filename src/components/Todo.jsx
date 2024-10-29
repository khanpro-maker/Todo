import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';
import useTodo from '../store/store';
import TodoList from './TodoList';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Todo = () => {
    const {todo,addTodo,removeTodo ,id} = useTodo();
    const [todos,setTodos] = useState('');
    const inputRef = useRef(null);
    console.log(todos)
    useEffect(()=>{
      toast.success("Welcome")
      toast.info("If your task is completed then click on the task it will delete the task!! ✨ ✨ ✨ ✨ ✨")
        inputRef.current.focus();
    },[])
    function handleclick(){
        if(todos){
            addTodo(todos)
            setTodos("")
        }
    }

  return (
    <>
    <div className=' absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] overflow-hidden'>
    <h1 className='text-white text-center font-[future] text-8xl cursor-pointer' >Taskly</h1>
       <div className='flex justify-center items-center mt-24
    
       '>
        
       <input type='text' value={todos} 
       ref={inputRef}
        onChange={(e)=>{setTodos(e.target.value)}}
        className='w-[500px] h-10 text-white uppercase rounded-lg bg-transparent border-2
        '
        placeholder='Enter your task...😎'
        />
        <motion.button
      className="box  flex justify-center items-center text-white font-semibold border-2 ml-2
      hover:bg-white hover:text-black
      
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={handleclick}
    >Add</motion.button>
   
    
       </div>
       <ul className='mt-5'>
        {todo.map((todo,index)=>{
            return(
            
               <TodoList key={index} todo={todo} removeTodo={()=>removeTodo(todo)}/>
            )
            
        })}
        
    </ul>
       
    </div>
    </>
  )
}

export default Todo