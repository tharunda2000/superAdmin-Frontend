import React from 'react'
import SideMenue from '../Components/SideMenue'
import Header from '../Components/Header'
import Body from '../Components/Body'

const HomePage = () => {
  return (
    <div className='inter'>

      <div className='flex w-full'>
        <SideMenue/>

        <div className='flex flex-col w-full'>
          <Header/>
          <Body/>
        </div>

      </div>
        
    </div>
  )
}

export default HomePage
