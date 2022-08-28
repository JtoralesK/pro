import { useState } from 'react'
import './App.css'
import { About } from "./components/about/about";
import { Contact } from "./components/contact";
import {Intro}from"./components//intro"
import { ListProjects } from "./components/listProjects";
import { Pg } from "./components/pantallasGrandes";
import {Header} from"./components/header"
import { Toggle } from "./components/toggle";
import { Footer } from "./components/footer";
function App() {
  const [mode , setMode] = useState(true)

  const handle =()=>{                
      setMode(!mode)
    }
  
  return (
      <div className={mode?"dark-mode":"normal-mode"}>
      <Pg>
       <Header>
       <Toggle change={handle}/>
       </Header>
       <Intro/>
       <ListProjects/>
       <About/>
       <Contact/>
      </Pg>
       <Footer/>

  
      </div>
  )
}

export default App
