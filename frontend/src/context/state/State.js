import React, { useState } from 'react'
import StateContext from './StateContext'

const State = ({children}) => {

    const [products, setProducts] = useState([]);
    


  return (
    <StateContext.Provider value={{products, setProducts}}>
        {children}
    </StateContext.Provider>
  )
}

export default State
