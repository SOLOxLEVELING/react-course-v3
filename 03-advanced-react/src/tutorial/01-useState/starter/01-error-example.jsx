const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count++
    console.log(count)
  }

  return (
    <div>
      <h2>Count: {count}</h2>;
      <button type='button' onClick={handleClick} className='btn'></button>
    </div>
  )
}

export default ErrorExample
