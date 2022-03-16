import * as api from "../api"; 

// Create ACTION CREATORS 
// Functions that return an actions 

// Redux thunk allows for asyncronous processes 

export const getPosts = () => async (dispatch) => {
    
    try {
        // data object is part of response coming from bakend 
        const {data} = await api.fetchPosts();    
        
        const action = {type: 'FETCH_ALL', payload: data}
    
        dispatch(action); 
    } 
    
    catch (error) {
        console.log(error.message);         
    }

}

export const createPost = (post) => async(dispatch) => {

    try {
        const {data} = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});
    }

    catch (error) {
        console.log(error); 
    }


}