import { createContext, useReducer } from "react";


export const NoOfPost = createContext({
    postlist: [],
    addPost: ()=>{},
    addLOTSPost: ()=>{},
    deletePost: ()=>{},
});

const postlistReducer = (currPostList,action) => {
    let newpostlist = currPostList;
    if(action.type === 'DELETE_POST'){
        newpostlist = currPostList.filter(post=>post.id !== action.payload.postid)
    }else if(action.type === 'ADD_POST'){
        newpostlist = [action.payload,...currPostList];
    }else if(action.type === 'ADD_LOTS_POST'){
        newpostlist = action.payload.posts
    }
    return newpostlist;
}

const NoOfPostProvider = ({children}) => {
    const [postlist, dispatchpostlist] = 
    useReducer(postlistReducer,[])
    
    const addPost = (posttitle,postbody) => {
        dispatchpostlist({
            type: 'ADD_POST',
            payload:{
                id:Date.now(),
                title:posttitle,
                body:postbody
            }
        })
    }

    const addLOTSPost = (posts) => {
        dispatchpostlist({
            type: 'ADD_LOTS_POST',
            payload:{
                posts
            }
        })
    }

    const deletePost = (postid) => {
        dispatchpostlist({
            type: 'DELETE_POST',
            payload:{
                postid,
            }
        })
    }

    return <NoOfPost.Provider value={
        {postlist,
        addPost,addLOTSPost,
        deletePost}
    }>
        {children}
    </NoOfPost.Provider>
}


export default NoOfPostProvider;