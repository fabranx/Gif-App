import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Form, InputGroup } from "react-bootstrap"
import "./SearchBar.css"

function SearchBar({setKeyword}){

  const [inputWord, setInputWord] = useState('')
  
  function handleKeywordChange(e){
    setInputWord(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setKeyword(inputWord)
  }
 

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputGroup className="p-2" size="lg">
          <Form.Control
            placeholder="Search all GIFs by keyword"
            aria-label="Search all GIFs by keyword"
            onChange={handleKeywordChange}
          />
          <Button className="searchButton" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </Button>
        </InputGroup>
      </form>
    </Container>
  )
}


export default SearchBar