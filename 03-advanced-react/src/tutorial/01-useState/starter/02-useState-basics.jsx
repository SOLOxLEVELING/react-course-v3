import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div>
      <h2>Count:{count}</h2>
      <button type='buttonq' className='btn' onClick={handleClick}>
        Click
      </button>
    </div>
  )
}

export default UseStateBasics
