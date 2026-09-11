import { useState } from "react";

const ToggleButton=()=>{


    const [isOn, setIsOn]= useState(false)
    const Toggle = ()=>setIsOn(!isOn)

    return(
        <>
        <p>The button{isOn ? 'ON' :'OFF'} </p>

        <button onClick={Toggle}>{isOn ? 'Turn OFF' :  'Turn ONN'}</button>
        </>
    )
}


export default ToggleButton;