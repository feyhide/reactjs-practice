import React, { useContext, useRef } from 'react'
import { NoOfPost } from '../stores/post-list-store';

const Form = () => {
    const {addPost} = useContext(NoOfPost);

    const title = useRef();
    const body = useRef();

    const handlesubmit = (event) => {
        event.preventDefault;
        const titletext = title.current.value;
        const bodytext = body.current.value;
        console.log(titletext,bodytext)
        addPost(titletext,bodytext)
    }

    return (
    <form onSubmit={handlesubmit} className='w-[66.66%] h-full bg-slate-200 items-center flex justify-center'>
        <input ref={title} type='text' className='' placeholder='title'/>
        <input ref={body} type='text' className='' placeholder='body'/>
        <button type='submit'>submit</button>
    </form>
  )
}

export default Form