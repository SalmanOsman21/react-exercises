import React, { useState } from 'react'
import LanguageContext from './LanguageContext'
import { Greeting } from './Greeting'

const App = () => {

  const [langugae , setLanguage] = useState('eng')

  const toggleLanguage = ()=>{
    setLanguage((prev)=> (prev === "eng" ? "esp" : "eng"))
  }

  return (
    <LanguageContext.Provider value={langugae}>
      <h1>Language Context</h1>
      <button onClick={toggleLanguage}> Switch to {langugae=== "eng" ? "esp" : "eng"}</button>

      <Greeting/>
      </LanguageContext.Provider>
  )
}

export default App