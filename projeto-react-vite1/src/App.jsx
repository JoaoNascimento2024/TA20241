import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './Titulo'

function App() {

  return (
    <>
    <Titulo nome={"Joao"} cor={"red"}/>
    <Titulo nome={"Luis"} cor={"blue"}/>
    <Titulo nome={"Teste"}/>
    </>  

  )
}

export default App
