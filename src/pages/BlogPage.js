import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Pagination from '../components/Pagination';


const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);
     
    const blogId = location.pathname.split("/").at(-1);


    async function fetchRelatedBlogs()
    {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log("insede BlogPage")
            console.log(data);
            console.log("insede BlogPage " + {blogId})
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        }
        catch(error) {
             console.log("Error aagya in Blog id wali call");
             setBlog(null);
             setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId)
            fetchRelatedBlogs();

    }, [location.pathname] )
  return (
    <div className='w-11/12 max-w-2xl mx-auto '>
      <Header/>
      <div className='mt-24 mb-4'>
        <button onClick={ () => navigation(-1)}
        className="border-2 border-gray-300 py-1 px-4 rounded-md"
        > 
            Back
        </button>
      </div>
      {
        loading ? (<div className=' flex justify-center items-center h-screen -mt-24'> 
                      <p className=' font-bold text-3xl'>Loading...</p>
                   </div>)  : 
        blog ? 
        (<div className=' flex flex-col gap-3'>
                <BlogDetails post={blog} />
                <h2 className=' font-bold text-2xl mt-8' >Related Blogs</h2>
                {
                    relatedblogs.map( (post) => (
                        <div key = {post.id} className=' mb-8'>
                            <BlogDetails post={post} />
                        </div>
                    ))
                }
            </div>
        ) : 
        (<div>
            <p> No Blog Found </p>
          </div>
        )
      }

      {/* <Pagination/> */}
    </div>
    
  )
}

export default BlogPage
