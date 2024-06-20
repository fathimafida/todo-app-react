import React, { useEffect ,useState} from 'react'
import PostCard from './Components/PostCard'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/slices/postSlice'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// import {setPostList,setIsPostError,setIsPostLoading} from '../../redux/slices/postSlice'

const Posts = () => {
//   const[posts,setPosts] = useState([
//   ])
//   const[isError,setIsError] =useState(false)
//  const[isLoading,setIsLoading] =useState(true)
//  const percentage = 66;


// * useSelector is a hook provided by react-redux library. 
// * It allows us to extract data from the Redux store state.
// * Here, we are extracting the post data from the Redux store state.
// * The post data is stored in the "post" slice of the state and
// * we are using the "postState" variable to hold this data.
const dispatch = useDispatch()
const postState = useSelector((state)=>state.post)
  useEffect(()=>{
  dispatch(getPosts())
  //   const getPosts = async()=>{
  //    try {
  //     const resp = await axios.get("https://json-placeholder.mock.beeceptor.com/posts")
  // dispatch(setPostList(resp.data))
  //    } catch (error) {
  //    dispatch(setIsPostError(true))
  //    }
  //    finally{
  //    dispatch(setIsPostLoading(false))
  //    }
  //   }
  //   getPosts()
  },[])


if(postState.isLoading){
  return <div className='w-50 h-50 text-xl  font-bold justify-center flex' >
    Loading...
        </div>
}

  if(postState.isError){
    return <div className=' flex justify-center font-extrabold  text-2xl'>Something Went Wrong...</div>
  }
  return (
  <>
<div className='flex flex-wrap justify-center gap-4'>
      {postState.postList.map((post,index)=>{
        return <div className={`flex flex-col ${(index % 3 === 0) ? 'flex-col' : ''} flex-shrink-0 flex-grow-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}>
          <PostCard  key={post.id} post={post}/>
              </div>
                  {/* // This line of code is a ternary operator that checks if the index of the current post is divisible by 3. 
          If it is, it applies the 'flex-col' class to the div, 
        // which makes the posts stack vertically instead of horizontally. If it's not divisible by 3, it doesn't apply the 'flex-col' class. 
        // It also applies the 'flex-shrink-0' and 'flex-grow-0' classes to prevent the posts from shrinking or growing based on their content, 
        // and sets the width of the div to 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4' to make the posts responsive and stack vertically on smaller screens. */}
      })}

    
    
    
    </div>
     
    </>
  )
}

export default Posts
