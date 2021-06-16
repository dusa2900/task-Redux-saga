
export const FirstReducer=(state={info:[]},action)=>
{
    switch(action.type)
    {
        case "INFO_ACTION":
            return {info:action.records}
        default :
            return state;
    }
}