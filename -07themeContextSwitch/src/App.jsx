import { useEffect, useState } from "react"
import ThemeBtn from "./components/themeBtn"
import { ThemeContextProvider } from "./contexts/themeContext"
import Card from "./components/Card"

function App() {
  const [thememode,setThememode]=useState('light')

  const darkTheme = () =>{
    setThememode('dark')
  }

  const lightTheme = () => {
    setThememode('light')
  }
 


  //actual change in theme
  useEffect(()=>{
document.querySelector('html').classList.remove('light','dark')
document.querySelector('html').classList.add(thememode)
  },[thememode])

  return (
    <ThemeContextProvider value={{thememode,darkTheme,lightTheme}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeContextProvider>
  )
}

export default App
