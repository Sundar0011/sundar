

import './index.css';
import TaskList from './TaskList';
const Content = ({items,changeState,deleteList}) => {
  return (
    <div className='content'>
      {items.length?(
        <TaskList items={items} changeState={changeState} deleteList={deleteList}/>
      ):(<h1>'No Task'</h1>)}
    </div>
  )
}

export default Content
