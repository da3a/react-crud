// A Simple CRUD Demonstration using React and React Hooks

import React, { useState } from "react";

function AddComponent({addItem})
{
  const [value, setValue] = useState("")

  const handleSubmit = e =>{
    e.preventDefault()
    addItem(value)
    setValue("")
  }
  return (
    <form onSubmit={handleSubmit} className="row p-2 m-2">
        <input value={value} onChange={e=> setValue(e.target.value)} placeholder="Enter a new value here"/>
    </form>
  )
}
function ItemComponent({item, index, deleteItem}){

  return (
  <div>
  <span className="p-2 m-2">{item.text}</span><button onClick={() => deleteItem(index)}> X </button>
    </div>
   )
}
function App() {
  const [items, setItems] = useState(
    [
      {text:"item1"},
      {text:"item2"},
      {text:"item3"}
    ]
  )

  const addItem = (text) => {
    console.log(text)
    const tempItems = [...items, {text}]
    setItems(tempItems)    
  }

  const deleteItem = (index) =>{
    console.log(index)
    const tempItems = [...items]
    tempItems.splice(index, 1)
    setItems(tempItems)
  }

  return <div id="App" className="container">
    {
      items.map((item, index) => {
        return (<ItemComponent className="row" key={index} index={index} item={item} deleteItem={deleteItem}/>)
      })
    }
    <AddComponent addItem={addItem}/>
  </div>;
}

export default App