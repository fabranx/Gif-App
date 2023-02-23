import { Container } from "react-bootstrap"
import React from "react"
import './Contents.css'
import {Image} from 'react-bootstrap'
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function Contents({gifsData, status, error, isFetching, setShowBanner}){

  async function copyToClipboard(url){
    try{
      await navigator.clipboard.writeText(url)
    } catch(err) {
      console.error("Impossible copy to clipboard", err)
    }

    setShowBanner(true)
  }

  return (
    <main className="main">
      <Container className="gifs-container mt-4 mb-2">
          {status === 'error' ? <h4 className="text-center">{error.message}</h4> : (
            status === 'success' ? (
              gifsData && gifsData.map((page, i) => (
                <React.Fragment key={i}>
                  {page.results.map(gif => {
                    return(
                      <div key={gif.id} className="gif-div">
                        <Image className="gif"  thumbnail rounded key={gif.id} src={gif.media_formats.gif.url}></Image>
                        <div className="gif-icon">
                          <FontAwesomeIcon className="share-icon" icon={faCopy} onClick={() => copyToClipboard(gif.media_formats.gif.url)}></FontAwesomeIcon>
                        </div>
                      </div>
                    )
                  })}
                </React.Fragment>
              ))
            ) : null
          )}
      </Container>


      {isFetching ? <h4 className="text-center">Loading More</h4> : null} 
    </main>
  )
}



export default Contents