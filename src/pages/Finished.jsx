import React from 'react'
import { useState,useEffect } from 'react';
import Task from '../components/Task/Task';
import uuid from 'react-uuid'
import {MdDeleteOutline} from 'react-icons/md'
import Delete from '../components/Delete/Delete';

export default function Finished() {
  const getTodosFromLS=()=>{
    const data = localStorage.getItem('Todos');
    if(data){
      return JSON.parse(data)
    }
    else{
      return []
    }
  }

  const [storage,setStorage] = useState(getTodosFromLS())
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
    <>
    <div className='active__container'>
      <div style={{display:'flex',justifyContent:'space-between'}}>
            <input className='active__input' placeholder='Create new task' onChange={(e)=>setTodoValue(e.target.value)} value={todoValue}/>
            <button className='active__btn' onClick={handleSubmit}>Add</button>
      </div>
      <div style={{marginBlock:'40px'}}>
        {todos.map((individualTodo,index) => {
          return (<Task finish={true} handleClick={() => handleDelete(individualTodo.ID)} line={individualTodo.completed ? 'line-through' : ''} checked={individualTodo.completed} key={individualTodo.ID} task={individualTodo.TodoValue}/>)
        }
        )}
        {/* {todos.length > 0 ? <Delete handleDelete={() => setTodos([])}/> : ''} */}
      </div>
    </div>

    </>
  )
}
