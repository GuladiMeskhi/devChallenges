// we need useState and useEffect hooks
import React,{useState,useEffect} from 'react'
import uuid from 'react-uuid';
import Task from '../components/Task/Task';
import Delete from '../components/Delete/Delete';

// get todos from local storage
const getTodosFromLS=()=>{
  const data = localStorage.getItem('Todos');
  if(data){
    return JSON.parse(data)
  }
  else{
    return []
  }
}

export const Active = () => {

 
  const [todoValue, setTodoValue]=useState('');
  const [todos, setTodos]=useState(getTodosFromLS());

  const handleSubmit=(e)=>{
    e.preventDefault();

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

  const deleteItem=(id)=>{
    const filtered = todos.filter((todo)=>{
      return todo.ID != id
    })
    setTodos(filtered)
  }

  function deleteAll(){
    const newArr = todos.filter((todo) => {
      return todo.completed == false
    })
    setTodos(newArr)
  }


  return (
    <div className='active__container'>
        <div style={{marginBlock:'40px'}}>
          {todos.filter((item) => item.completed  === true).map((individualTodo,index) => {
            return (<Task finish={true} delIcon={true} removeTask={() => deleteItem(individualTodo.ID)} line={individualTodo.completed ? 'line-through' : ''} checked={individualTodo.completed}  key={individualTodo.ID} task={individualTodo.TodoValue}/>)
          }
          )}
          {todos.filter((todo) => todo.completed === true).length > 0 ? <Delete handleDelete={deleteAll}/> : ''}
        </div>
    </div>
  )
}
