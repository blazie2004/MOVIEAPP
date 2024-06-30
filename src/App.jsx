import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Mainroutes from './Routes/mainroutes'
import NavBar from './Components/Navbar/NavBar'

function App() {
  const [count, setCount] = useState(0)
  console.log("git changes...");
  console.log(import.meta.env.VITE_API_KEY);
  
  return (
   <>    
        <NavBar/>
        <Mainroutes/>
    </>
  )
}

export default App
