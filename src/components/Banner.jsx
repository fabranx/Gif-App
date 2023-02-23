import { Alert, Container } from "react-bootstrap"
import { useState, useEffect } from "react"



function Banner({showBanner, setShowBanner}){

  useEffect(() => {
    if(showBanner){
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 95000);
  
      return () => clearTimeout(timer);
    }

  }, [showBanner]);

  return(
    <>
      {showBanner ? 
        <Container className='fixed-top'>
          <Alert 
            className="d-flex justify-content-center"
            variant="info"
            dismissible={true}
            onClose={() => setShowBanner(false)} >Copied to clipboard</Alert>
          </Container>
         : null }
    </>
  )

}

export default Banner