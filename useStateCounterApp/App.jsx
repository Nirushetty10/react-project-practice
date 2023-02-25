import React, {useState} from 'react'

function App() {
   let[count , setCount] = useState(0)
   let handleIncrement = ()=>{
     setCount(count+1)
   }
   let handleDecrement = ()=>{
    if(count>0) {
        setCount(count-1)
    } 
    
  }
  let handleReset = ()=>{
    setCount(0)
  }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+ Increment</button>
        <button onClick={handleDecrement}>- Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App