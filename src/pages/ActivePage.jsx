import React from 'react'
import Task from '../components/Task/Task'
import { useState,useEffect } from 'react'
import uuid from 'react-uuid'


const getTodosFromLS=()=>{
  const data = localStorage.getItem('Todos');
  if(data){
    return JSON.parse(data)
  }
  else{
    return []
  }
}


export default function ActivePage() {

  const [todoValue, setTodoValue]=useState('');
  const [todos, setTodos]=useState(getTodosFromLS());

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(todoValue.length === 0){
      alert('type somethin first')
      return
    }
    let todoObject={
      ID: uuid(),
      TodoValue: todoValue,
      completed: false
    }
    setTodos([...todos, todoObject]);
    setTodoValue('');
  }
  console.log(todoValue)

  useEffect(()=>{
    localStorage.setItem('Todos', JSON.stringify(todos));
  },[todos])

  const handleDelete=(id)=>{
    const retrieveItem = todos.findIndex(element => element.ID === id)
    todos[retrieveItem].completed =! todos[retrieveItem].completed;
    let hi = todos
    console.log(hi)
    setTodos([...hi])
  }

  return (
    <div className='active__container'>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <input className='active__input' type='text' placeholder='Create new task' required={true} minLength={2} maxLength={140} onChange={(e)=>setTodoValue(e.target.value)} value={todoValue}/>
            <button className='active__btn' onClick={handleSubmit}>Add</button>
        </div>
        <div style={{marginBlock:'40px'}}>
          {todos.filter((item) => item.completed  === false).map((individualTodo,index) => {
            return (<Task handleClick={() => handleDelete(individualTodo.ID)} checked={individualTodo.completed} key={individualTodo.ID} task={individualTodo.TodoValue}/>)
          }
          )}
        </div>
    </div>
  )
}
