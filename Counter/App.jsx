import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  function addvalue(){
    setCounter(counter+1)
  }
  function removevalue(){
    setCounter(counter-1)
  }


  return (
    
    <>
      <div>
        <h1>React Counter Project</h1>
        <h2>Counter Value{counter}
        </h2>
        <button
        onClick = {addvalue} >Add value{counter}</button>
        <br /><br /><br /><br />
        <button
        onClick = {removevalue}>remove Value{counter}</button>
      </div>
      
    </>
  )
}

export default App
