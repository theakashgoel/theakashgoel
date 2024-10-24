import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count=>count+1)
    }

    const handleDecrement = () => {
        setCount(count=>count-1)
    }

    const reset =()=>{
        setCount(0)
    }
  return (
    <>
    <h1>Counter</h1>
    <button data-test-id="decrement-btn" onClick={handleDecrement}>-</button>
    <span data-test-id="value"  className='mg-5'>{count}</span>
    <button data-test-id="increment-btn"  onClick={handleIncrement}>+</button>
    <button  data-test-id="reset-btn" onClick={reset}>Reset</button>
    </>
  )
}

export default Counter