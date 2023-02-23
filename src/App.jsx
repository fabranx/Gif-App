import { useState } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import MainApp from './components/MainApp'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



function App() {

  const queryClient = new QueryClient()

  const [theme, setTheme] = useState('light')


  function changeTheme(){
    document.body.classList.remove(`${theme}-theme`)
    let new_theme = theme === 'light' ? 'dark': 'light'
    document.body.classList.add(`${new_theme}-theme`)
    setTheme(new_theme)
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div className={`${theme}-theme App`}>
      <QueryClientProvider client={queryClient}>
        <MainApp/>
      </QueryClientProvider>
      </div>
    </ThemeContext.Provider>
  )
}

export default App