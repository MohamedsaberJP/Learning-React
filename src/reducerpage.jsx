import { useReducer } from "react";

// export let Reducercom = ()=>{

//     let initial = {
//         count :0
//     }

//     let reducer= (state,action)=>{
//         switch(action.type){
//             case "add" :return {count : state.count +1}
//             case "min" :return {count : state.count -1}
//             default : return {count : 0}
//         }
//     }

//     let [state,dispatch]=useReducer(reducer,initial)

//     return(<>
//     <h3>the count is : {state.count}</h3>
//     <button onClick={()=>dispatch({type :"add"})}>+</button>
//     <button onClick={()=>dispatch({type :"min"})}>-</button>
//     <button onClick={()=>dispatch({type :"reset"})}>reset</button>
//     </>)

// }


export let Reducercom = () => {
    let initial = { count: 0 };

    let reducer = (state,action)=>{
        switch(action.type){
            case "add": return {count : state.count +1}
            case "min": return {count : state.count -1}
            case "reset": return {count : initial.count}
            default : return state ;
        }
    }
    let [state , dispatch] = useReducer(reducer,initial)
    return (<>
        <h2>the number is : {state.count}</h2>
        <span>
            <button onClick={() => dispatch({ type: "min" })}>-</button>
            
            <button onClick={() => dispatch({ type: "add" })}>+</button>
            
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </span>
    </>);
};


