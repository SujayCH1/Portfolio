import { useState } from 'react'
import './App.css'
import {Navbar} from "./components/Navbar/navbar"
import {About} from "./components/About/about"
import { Skill } from './components/Skill/skill'
import { Project } from './components/Projects/project'
import { Contact } from './components/Contact/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
