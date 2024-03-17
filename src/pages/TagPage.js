import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';



const TagPage = () => {

    const navigaton = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div className='w-11/12 max-w-2xl mx-auto '>
      <Header/>
      <div className='mt-24 mb-4'>
        <button onClick={() => navigaton(-1)}
        className="border-2 border-gray-300 py-1 px-4 rounded-md" >
            Back
        </button>
        <h2 className=' font-bold text-2xl mt-4'>
            Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>

    </div>
  )
}

export default TagPage
