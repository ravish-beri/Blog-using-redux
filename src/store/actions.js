import axios from 'axios';
export const ADD_BLOG="ADD_BLOG";
export const DELETE_BLOG="DELETE_BLOG";
export const VIEW_ALL_POSTS="VIEW_ALL_POSTS";
export const EDIT_BLOG="EDIT_BLOGS";
export const SINGLE_POST="SINGLE_POST";



export const onviewAllPosts=(posts)=>{
    return {
        type:VIEW_ALL_POSTS,
        posts:posts
    }
}

export const startPost=()=>{
    return dispatch => {
        axios.get('/posts').then(
            reponse=>{
                dispatch(onviewAllPosts(reponse.data));
            })
    }
}

export const newPost=(data)=>{
    return dispatch=>{
        axios.post('/posts/',data)
    }
}

export const fetchSinglePost=(id)=>{
    return dispatch =>{ 
        axios.get('/posts/'+id).then(response =>{
            dispatch(setSinglePost(response.data))
        })
    }
}
export const setSinglePost=(response)=>{
    return {
         type:SINGLE_POST,
        singlePost:response
    }
}

export const updateSingleBlog=(id,data)=>{
    return disptach => {
        axios.put('/posts/'+id,data)


    }
}
 
