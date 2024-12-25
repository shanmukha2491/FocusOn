import { useState } from 'react'
import Home from './components/home'
import myBackground from "../public/assets/background.jpg"
import TimeCard from './components/timeCard'
import QuoteCard from './components/quoteCard'
import NavBar from './components/navbar'
function App() {

  return (
    <div className="h-screen w-screen bg-inherit
    bg-no-repeat bg-center relative"
    style={{ backgroundImage: `url(${myBackground})`, contain:"content" }}
    >
     <TimeCard/>
     <Home/>
     <NavBar/>
     <QuoteCard/>
    </div>
  )
}

export default App
