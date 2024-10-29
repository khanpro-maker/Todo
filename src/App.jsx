import React from 'react'
import { motion } from "framer-motion"
import "./App.css"
import Todo from './components/Todo'
import { Routes,Route } from 'react-router-dom'
import Landing from './components/Landing'
 const App = () => {
  return (
    
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/Home" element={<Todo/>} />
  </Routes>

  )
}
export default App;