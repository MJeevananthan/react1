// import react,{useState} from "react";
// const Todo = ()=> {
//     const[State,setState]=useState(0)
//     return (
//         <div style={{
//             textAlign:"center",
//             fontSize:"40px",
//             border: "4px solid black",
//             Width:"400px",
//             height:"400px",
//             marginLeft:"500px",
//             marginRight:"500px",
//             backgroundColor:"aqua"
//         }}>Todo
//             <h1>{State}</h1><div style={{
//                 gap:"20px"
//             }}>
//             <button onClick={()=>setState(State+1)}>increment</button>
//             <button  onClick={()=>setState(State-2)}>decrement</button>
//             <button onClick={()=>setState(State*0)}>reset</button>
//         </div>
//         </div>
     
//     );
// };

// export default Todo;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset} from "./store";
const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{
      border:"2px solid black",
      textAlign:"center",
      fontSize:"40px",
      backgroundColor:"aqua",
      marginLeft:"100px",
      marginRight:"100px",
      width:"500px",
      height:"150px",
      borderRadius:"10px",
      padding:"20px",
      margin:"60px auto"


    }}
    >
      <div>Count:{count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button> 
      <button onClick={() => dispatch(reset())}>reset</button>       
    </div>
  );
};

export default Todo;