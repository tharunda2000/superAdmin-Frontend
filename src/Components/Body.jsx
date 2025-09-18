import React from 'react'
import { useAppContext } from '../Context/Context'

const Body = () => {

    const {} = useAppContext();
    
  return (
    

    <div className='relative bg-blue-100 min-w-full h-full noto'>
      <div className='flex relative bg-white mt-20 mx-30 '>
          <h1>Database Settings</h1>
      </div>
    </div>
  )
}

export default Body
