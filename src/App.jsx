import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Mainroutes from './Routes/mainroutes'
import NavBar from './Components/Navbar/NavBar'
import ThemeContext from './Context/ThemeContext'

function App() {
  const [theme, settheme] = useState('light');
  console.log("git changes...");
  console.log(import.meta.env.VITE_API_KEY);
  console.log("theme",theme);

  
  return (
   <>     
        
        <ThemeContext.Provider value={{theme,settheme}}>
          <div data-theme={theme}>
          <NavBar/>
          <Mainroutes/>
          </div>
        </ThemeContext.Provider>
    </>
  )
}

export default App
