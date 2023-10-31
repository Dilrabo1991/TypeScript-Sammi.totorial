import React from 'react'
import cls from './home.module.css'
import { useState } from 'react'
import { IData } from './interfaces'
import { data } from './constants'
const App = (): JSX.Element => {
const changeHandle =(e: React.ChangeEvent<HTMLInputElement>):void=>{
  setTitle(e.target.value)
}

const [title, setTitle] = useState <string>();
const [arr, setArr] = useState<IData[]>(data);

const handleSubmit = ():void=>{
  console.log(title);
  if(!setTitle ?.length) return
const newData = {
  id: Date.now(),
  title: title
};

setArr([...arr, newData]);


  setTitle('');
}

const deleteItem = (id:number):void=>{
  const newDate = arr.filter((c) => c.id !== id);
  setArr(newDate);
}
  return (
    <div className={cls.todo}>
      <h1 className={cls.title}>Todo List</h1>
        <input className={cls.input}
         type='text' value={title} 
         placeholder='Add Todo...'
         onChange={changeHandle}/>
        <button onClick={handleSubmit}>Add Todo</button>

        <div className={cls.cart}>
          {arr.map((c) => (
            <div className={cls.cartItem} key={c.id}>
              <p className={cls.cartItemP}>{c.title}</p>
              <div className={cls.btn} >
              <button  onClick={() => deleteItem(c.id)}>delete</button>
              </div>
              </div>
              
              ))}
      
           
        </div>
          
    </div>

  )
}

export default App
