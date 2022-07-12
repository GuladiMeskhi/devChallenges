import React from 'react'
import {MdDeleteOutline} from 'react-icons/md'

export default function Task({task,handleClick,checked,line,removeTask,delIcon,checkbox}) {

  let icon = delIcon
  
  return (
    <div className='task__container'>
        <div style={{display:'flex', alignItems:'center'}}>
            <input type='checkbox' onChange={checkbox} onClick={handleClick} style={{width:'16px',height:'16px'}} checked={checked}/>
            <span style={{marginLeft:'10px',textDecorationLine:line}}>{task}</span>
        </div>
        {/*!checked ? <button className='single-delete' style={{cursor:'pointer',color:'rgba(47, 128, 237, 0.8)',fontWeight:'700'}} onClick={handleSingleDelete}>
          Finish
        </button> : null
        */}
        <span style={{display:'flex',alignItems:'center'}}>
          {icon ? <MdDeleteOutline fontSize='24px' cursor="pointer" color="rgba(189, 189, 189, 1)" onClick={removeTask}/> : ''}
        </span>
    </div>
  )
}
