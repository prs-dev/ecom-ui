import React from 'react'
import Sidebar from './components/Sidebar'
import Display from './components/Display'

const Home = () => {
  return (
    <div className='flex min-h-[90vh] min-w-[80vw] overflow-x-auto overflow-y-hidden rounded shadow-md bg-[#ebeceb]'>
        <Sidebar />
        <Display />
    </div>
  )
}

export default Home