import React, { useContext } from 'react'
import FetchContext from './FetchContext'
import StateContext from '../state/StateContext'
import toast from 'react-hot-toast'

const Fetch = ({children}) => {

    const { setProducts } = useContext(StateContext)


    const getAllProducts = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_API_URL + "/api/getAllProducts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const json = await response.json();
            const products = JSON.parse(json.context.products)
            if (json.success) {
                console.log(products);
                setProducts(products)
            } else {
                toast.error(json.error)
            }

        } catch (error) {
            console.log(error);
        }
    }


  return (
    <FetchContext.Provider value={{ getAllProducts }}>
        {children}
    </FetchContext.Provider>
  )
}

export default Fetch
