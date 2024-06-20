import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className='flex flex-col p-3 border-2 border-rounded-xl m-10 shadow-lg transition-all ease duration-1000  h-auto hover:scale-125 bg-indigo-50 '>
    <h2 className='text-2xl font-bold font-serif'>{post.title}</h2>
      <p className='text-lg font-serif'>{post.body}</p>
      <p className='text-lg font-serif '>Comments: {post.comment_count}</p>
      <a href={post.link} className='text-lg font-serif  text-blue-500 underline'>Click to know more</a>
    </div>
  )
}

export default PostCard
