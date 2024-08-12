import React from 'react'
import { FaTrash } from 'react-icons/fa'
const TaskList = ({items,changeState,deleteList}) => {
  return (
    <div>
          <ul>
          {items.map((item)=>(
            <li className='itemList' key={item.id}>
              <input className='check'
              type="checkbox"
              checked={item.state}
              onClick={()=>changeState(item.id)}
              />
              <label htmlFor="">{item.name}</label>
              <FaTrash 
                type='button'
                onClick={()=>deleteList(item.id)}
                className='del-btn'
              />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TaskList
