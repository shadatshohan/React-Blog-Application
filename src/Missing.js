import React from 'react'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Post Not Found</h2>
                 <p>Well,thats disappointing</p>
                 <p>
                  <Link to='/'>Visit our homepage</Link>
                 </p>
    </main>
  )
}

export default Missing