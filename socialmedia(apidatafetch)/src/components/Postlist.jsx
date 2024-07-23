import React, { useContext } from 'react';
import Post from './Post';
import { NoOfPost } from '../stores/post-list-store';

const Postlist = () => {
    const {postlist} = useContext(NoOfPost)
    console.log(postlist)
    return (
    <div className='w-[66.66%] bg-slate-200 gap-2 flex flex-row flex-wrap items-center'> 
    {postlist.map((post)=>{
       return <Post key={post.id} post={post} />;
    })}
    </div>
  );
};

export default Postlist;
