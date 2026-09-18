import { useState } from "react";

const Counter = ()=>{

    const [count , SetCount ]= useState(0)

    const Increment = ()=>{SetCount (count+1)} 

    const Decrement = ()=> {
        if(count>0){
            SetCount(count-1)
        };
    }


    return(
        <div>
            <h2>Count :{count} </h2>
            <button onClick={Decrement} disabled={count==0}>Decrement</button>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}

export default Counter;