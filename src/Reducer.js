export const initialState ={
    tasks:[],
    edit : [],
    name:'rajesh'
}

export const stateReducer = (state,action)=>{
    console.log('state',state,'action',action);
    // return state;
    switch(action.type){
        case 'push': return{
            ...state,
            task:action.payload,
        }
        case 'SSA': return{
            ...state,
            task:action.payload,
        }
        case "EDIT":
           return {
            ...state,
            edit:action.payload
           }
        default:
            return state;
    }
}
