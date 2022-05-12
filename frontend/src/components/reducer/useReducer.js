export const initialState = [];

export const userReducer = (state,action) =>{
    if(action.type==="INPUT_MARKS"){
        return action.payload;
    }
    return state;
}