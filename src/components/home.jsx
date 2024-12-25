import React from 'react'
import { useState } from 'react'
const Home = () => {
    const [tasks, setTask] = useState([])
    const [inputTask, setInputTask] = useState("")
    const addTask = ()=>{
          
    if(inputTask.trim()){
      setTask([...tasks,
                        {id:Date.now(),text:inputTask, completed:false}])
      setInputTask("")
    }

    }
  return (

    <div className="flex-col  align-center bg-white shadow-lg rounded-3xl m-4 p-6 opacity-65 h-[350px] overflow-hidden w-[350px]">
      <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>
        React TodoList</h1>
      <div className='mb-4 flex'>
        <input 
        value={inputTask}
        onChange={(e)=>setInputTask(e.target.value)}
        type="text" 
        placeholder='Add a new task' 
        className='flex-grow px-3 py-2 border rounded-l-lg focus:outline-none 
        focus:ring-2 focus:ring-blue-500'/>
        <button 
        onClick={addTask}
        className='bg-blue-500 text-white px-4 py-2 rounded-r-lg'>Add</button>
      </div>

    
      <ul className='space-y-2'>
        {tasks.map((task)=>(
            <li key={task.id}
            className='flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200'
            >
              <input type="checkbox"
              className='mr-2 h-5 w-5 text-blue-600'
              checked={task.completed}
              onChange={()=>
                setTask(
                  tasks.map((t)=>(
                  t.id === task.id ? {...t, completed: !t.completed}:t
                ))
              )}
              />
              <span className={`flex-grow ${task.completed ? "line-through text-gray-500" : "text-greay-800"}`}>
                {task.text}</span>

              
            </li>
        ))}
      </ul>
      </div>
      
  
  )
}

export default Home