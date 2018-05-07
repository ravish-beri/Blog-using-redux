import * as actionTypes from './actions';

const initialState={
    posts:[],
    singlePost:{}
};

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_BLOG:
        return{
            ...state


        };
        case actionTypes.DELETE_BLOG:
        return{
            ...state
        };
        case actionTypes.VIEW_ALL_POSTS:
        return{
            ...state,
            posts:[
                ...action.posts
            ]
                
        };
        case actionTypes.SINGLE_POST:
        return{
            ...state,
            singlePost:{...action.singlePost}
        }
        case actionTypes.EDIT_BLOG:
        return{
            ...state
        }
        default:
        return state;
    }

};
export default reducer;