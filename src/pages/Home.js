import React from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='w-11/12 max-w-2xl mx-auto '>
      <Header/>
      <div className=' mt-24'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
