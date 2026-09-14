import { useEffect, useState } from "react";

function App(){
    const[name, setName]= useState('')
    const[Greeting , setGreeting]= useState('Hello')


    useEffect(()=>{
        if(!name){
            document.title= 'Welcome';
        } else{
            document.title= `${Greeting}, ${name}`
        }
    },[name , Greeting])


    return( <div>
        <h2>Enter Your name</h2>
        <input type="text"
         value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <h2>Enter A Greeting</h2>
        <input type="text" 
            value={Greeting}
            onChange={(e)=>setGreeting(e.Greeting.value)}
        
        />

    </div>
    )
}

export default App;