import React from 'react'

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      <h1>Numbers List:</h1>
      {arr.map((num, index) => (
      <p key={index}>{num}</p>
      ))}
    </div>
  )
}

export default App
