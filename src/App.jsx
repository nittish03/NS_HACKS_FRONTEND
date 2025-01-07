import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Qrcode from './components/Qrcode'
import Navbar from './components/Navbar'



function App() {

  return (
    <>
    <Navbar/>
<Routes>
<Route path='/' element={<Qrcode/>}/>

</Routes>
    </>
  )
}

export default App
