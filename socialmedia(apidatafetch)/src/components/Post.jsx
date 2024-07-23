import React, { useContext } from 'react'
import { NoOfPost } from '../stores/post-list-store'

const Post = ({post}) => {
    const {deletePost} = useContext(NoOfPost);
    return (
    <div className='w-[400px] relative h-[400px] bg-red-200 flex flex-col justify-center text-center item-center'>
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
        <h4 onClick={()=>deletePost(post.id)} className='absolute right-0 top-1/2 bg-blue-200'>delete</h4>
    </div>
  )
}

export default Post