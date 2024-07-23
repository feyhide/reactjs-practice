import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import { NoOfPost } from '../stores/post-list-store';

const Postlist = () => {
    const {postlist,addLOTSPost} = useContext(NoOfPost)
     const [datafetching,setdatafetching] = useState(false);
    // const [datafetched,setdatafetched] = useState(false);

    // if(!datafetched){
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then(data=>{console.log(data),addLOTSPost(data.posts)});
    //     setdatafetched(true)
    // }

    useEffect(()=>{
        setdatafetching(true)
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://dummyjson.com/posts', {signal})
        .then(res => res.json())
        .then(data=>{console.log(data),addLOTSPost(data.posts) ,setdatafetching(false)});
       return () => {
        controller.abort();
       }
    },[])

    const getpost = () => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data=>{console.log(data),addLOTSPost(data.posts)});
    };

    return (
        <>
    <div className={`w-[66.66%] bg-slate-200 gap-2 ${datafetching? "flex" : 'hidden'} flex-row flex-wrap items-center`}>LOADING</div>
    <div className='w-[66.66%] bg-slate-200 gap-2 flex flex-row flex-wrap items-center'> 
    <div onClick={getpost} className={`${postlist.length === 0 && !datafetching ? 'flex' : "hidden" } bg-red-500 w-full h-screen`}>
        <h3 className={`flex w-full h-screen items-center text-center fixed `}>NO POST HERE</h3>
        <h3>click to get posts</h3>
    </div>
    {!datafetching && postlist.map((post)=>{
        return <Post key={post.id} post={post} />;
        })}
    </div>
    </>
  );
};

export default Postlist;
