import React from 'react'
import Table from './Table'

const App = () => {
  const input = 3;
  return (
    <div className='flex gap-4'>
      <Table />
      <Table letnum={input} />
    </div>
  )
}

export default App