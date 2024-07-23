import { createContext, useReducer } from "react";


export const NoOfPost = createContext({
    postlist: [],
    addPost: ()=>{},
    deletePost: ()=>{},
});

const postlistReducer = (currPostList,action) => {
    let newpostlist = currPostList;
    if(action.type === 'DELETE_POST'){
        newpostlist = currPostList.filter(post=>post.id !== action.payload.postid)
    }else if(action.type === 'ADD_POST'){
        newpostlist = [action.payload,...currPostList];
    }
    return newpostlist;
}

const NoOfPostProvider = ({children}) => {
    const [postlist, dispatchpostlist] = 
    useReducer(postlistReducer,DEFAULT_POST_LIST)
    
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
        addPost,
        deletePost}
    }>
        {children}
    </NoOfPost.Provider>
}

const DEFAULT_POST_LIST = [{
    id:'1',
    title:"title",
    body:"body",
},
{
    id:'2',
    title:"title2",
    body:"body2",
},{
    id:'3',
    title:"title3",
    body:"body3",
}]

export default NoOfPostProvider;