export const initialState = {
    reg_no:10,
    // name:"VP",
    sessionmarks:[]
};
export const userReducer = (state,action) =>{
    if(action.type==="STUDENT"){
        return action.payload;
    }
    return state;
}

