import React from 'react';

const AddList = ({newItems,setNewItems,addNewItems}) => {
  return (
    <div className='add-list'>
      <form onSubmit={addNewItems} className='form-container'>
        <input
        className='add-input'
        autoFocus
        required
        placeholder='add item'
         type="text" 
         value={newItems}
         onChange={(e)=>setNewItems(e.target.value)} />
        
        <button type='submit' className='add-btn'>submit</button>
      </form>
    </div>
  );
}

export default AddList;
