import { useState } from "react"

export const Counter = ({ title, initialCounter }) => {

  const [counter, setCounter] = useState(initialCounter)
  return (
    <div>
      <p>{ title }</p> 
      <button className="button is-primary" onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
    </div>
  )
}
