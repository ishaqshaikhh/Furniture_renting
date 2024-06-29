import React, { useContext, useEffect, useState } from 'react'
import { BiX, BiMinus, BiPlus } from "react-icons/bi";
import styles from '../styles/cart.module.css'
import StateContext from '../../src/context/state/StateContext';


const Cart = (props) => {
    const { authenticated, setAuthenticated, setModal, checkUserIsAuthenticated } = useContext(StateContext);
    const checkUser = async () => {
        if(await checkUserIsAuthenticated() === true) {
            setAuthenticated(true)
        } else {
            setAuthenticated(false)
        }
    }
    
    useEffect(() => {
      checkUser()
    }, [])
    
    
    return (
        <>
        {authenticated ? (
            <div className={`${styles.cart} ${props.open ? styles.acitve : null}`} ref={props.cart}>
                <div>
                    <div className={`${styles.cart_top} d-flex justify-content-between align-items-center`}>
                        <h4>cart</h4>
                        <BiX className={styles.cartClose} onClick={() => {props.close(false)}} />
                    </div>
                    <div className={`${styles.cartList} mt-2`}>
                        <div className={`${styles.cartItem} mb-3`}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={process.env.REACT_APP_API_URL + `media/product_images/bed1.png`} alt="furniture-char" className="img-fluid" />
                                <div className={`${styles.itemInfo} d-flex flex-column justify-content-around`}>
                                    <h6>Bed1</h6>
                                    <div className="qty-container" style={{width: "fit-content"}}>
                                        <button className="qty-btn-minus btn-light" type="button">
                                            <BiMinus /></button>
                                        <input type="text" name="qty" value="1" className="input-qty" />
                                        <button className="qty-btn-plus btn-light" type="button">
                                            <BiPlus /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end flex-column align-items-end h-100 ">
                                <BiX className={styles.close} />
                                <span className="mt-4">&#8377;1000.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p></p>
                    <a href="/checkout" className="button2">Checkout - &#8377;1000.00</a>
                </div>
            </div>
        ): <>
            <div className={`${styles.cart} ${props.open ? styles.acitve : null}`} ref={props.cart}>
                <div>
                    <div className={`${styles.cart_top} d-flex justify-content-between align-items-center`}>
                        <h4>cart</h4>
                        <BiX className={styles.cartClose} onClick={() => {props.close(false)}} />
                    </div>
                    <div className={`${styles.cartList} mt-2`}>
                      <p>Please Login to continue</p>  
                    </div>
                </div>
            </div>
        </>}
        </>
    )
}

export default Cart
