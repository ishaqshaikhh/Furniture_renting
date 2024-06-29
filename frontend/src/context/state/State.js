import React, { useState } from 'react'
import StateContext from './StateContext'

const State = ({children}) => {

    const [products, setProducts] = useState([]);
    let token;
    const url = process.env.REACT_APP_API_URL
    const [authenticated, setAuthenticated] = useState(false)
    const checkUserIsAuthenticated = async () =>{
      token = localStorage.getItem('token');
      if(!token){
        return false;
      }
      const data = await fetch(url + "api/token/verify/",{
        method: 'POST',
        body: JSON.stringify({"token": token}),
        headers: {"Content-Type":"application/json","Authorization":`bearer ${token}`}})
      const result = await data.text();
      if(result){
        setAuthenticated(true)
        return true;
      } else {
        setAuthenticated(false)
        return false
      }
    }
    


  return (
    <StateContext.Provider value={{products, setProducts, checkUserIsAuthenticated, authenticated, setAuthenticated}}>
        {children}
    </StateContext.Provider>
  )
}

export default State
