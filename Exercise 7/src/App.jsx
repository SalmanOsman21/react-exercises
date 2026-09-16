import { useState, useEffect } from "react";
const App = () => {
const [mouse, setMouse] = useState({x:0, y:0});


useEffect(()=>{
  const handleMouse = (e)=>{
    setMouse({x: e.clientX, y: e.clientY})
  }
  window.addEventListener('mousemove', handleMouse);
  return()=>{
    window.removeEventListener('mousemove', handleMouse);
  }
},[])

  return(
    <>
    <h3>Mouse X:{mouse.x}</h3>
    <h3>Mouse Y:{mouse.y}</h3>

    </>
  )

}

export default App;