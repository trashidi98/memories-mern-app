// Reducer is a function that accepts state and action, then based on action type
// It will do some logic, usually return state changed by the action 


// State always has to be initialized and 
export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL': 
            return action.payload; 
            
        case 'CREATE': 
            return [...posts, action.payload]; 

        default: 
            return posts; 
    }
}