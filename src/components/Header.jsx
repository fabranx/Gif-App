import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import SearchBar from "./SearchBar"
import {Container, Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './Header.css'


function Header({setKeyWord}){

  const {theme, changeTheme} = useContext(ThemeContext)

  return (
    <header className="header sticky-top">
      <Container>
        <div className="d-flex p-2 justify-content-between align-items-center">
          <div className="title p-2">
            <h1 className='fw-bold mb-0'>GIFAPP</h1>
            <small>Powered By Tenor</small>
          </div>
          <Form.Switch
            type="switch"
            id="switch"
            label={<FontAwesomeIcon
                      color={theme === 'light' ? "orange" : "yellow"} 
                      icon={theme === 'light' ? faSun : faMoon}
                  />}
            onChange={changeTheme}
          />
        </div>      
        <SearchBar setKeyword={setKeyWord} />
      </Container>
    </header>
  )
}

export default Header