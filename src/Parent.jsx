import React from 'react'
import {BrowserRouter,Route,Routes}from "react-router-dom"  
import App from'./App'
function Parent(){
    return(
        <>
        <BrowserRouter>
    <Routes>
      <Route path='/contact' element={<div>Contact Page</div>}/>
    </Routes>
    </BrowserRouter>
    <App/>
        </>
    )
}
export default Parent;