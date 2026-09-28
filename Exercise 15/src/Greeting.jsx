import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'

export const Greeting = () => {

   const language =  useContext(LanguageContext);

   const message = {
    esp : "Hola!",
    eng : "Hello !"
   }
  return (
    <h1>{message[language]}</h1>
  )
}
