
import { useState } from 'react';
import AddList from './AddList';
import './App.css';
import Content from './Content';
import Count from './Count';
import Footer from './Footer';
import Header from './Header';
let name="sundar";
function App() {
 
    const [items,setItems]=useState([
     {
       id:1,
       name:'Learn React',
       state:false
     },
     {
       id:2,
       name:'Problem Solving',
       state:true
     },
     {
       id:3,
       name:'Workout',
       state:false
     }
    ]);
    const [newItems,setNewItems]=useState('');
    
    const addlist=(name)=>
    {
      const id=items.length?items[items.length-1].id+1:1;
      console.log(id);
      const newlist={id,name,state:false};
      const list1=[...items,newlist];
      setItems(list1)
    }

    const addNewItems=(e)=>{
      e.preventDefault();
      addlist(newItems);
      console.log(newItems);
      setNewItems('');
    }
    const changeState=(id)=>{
     const newItems=items.map((item)=>
       item.id===id?{...item,state:!item.state}:item
     )
     setItems(newItems);
    }
    const deleteList=(id)=>{
     const newList=items.filter((item)=>item.id!==id)
     setItems(newList)
     
    }
  return (
  <div> 
    <Header title="Task List"/>
    <AddList newItems={newItems} setNewItems={setNewItems} addNewItems={addNewItems} />
    <Count count={items.length}/>
    <Content items={items} changeState={changeState} deleteList={deleteList}/>
    <Footer/>
  </div>
  );
}

export default App;
