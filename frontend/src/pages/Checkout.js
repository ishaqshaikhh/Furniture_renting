import React, { useState } from 'react'
import styles from '../styles/checkout.module.css'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Checkout() {

  
  const initialOptions = {
    "client-id": "AbWAkTMOzXmtwNpgDnMjNLo-Ids8cGOpDEVzkFzSn-BvCwbtQF95b4vC8WoqBPnwlevWlAFg1mVSs2FV",
    "enable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };
  const createOrder = async () => {
      const response = await fetch("/api/paypal/create-order/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
      });
      const data = await response.json();
      return data.id;
  };

  const onApprove = async (data) => {
      const response = await fetch(`/api/paypal/capture-order/${data.orderID}/`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
      });
      const result = await response.json();
      console.log("Capture result", result);
  };


  const [message, setMessage] = useState("");

  return (
    <>
      <div className={`containerfluid ${styles.checkout}`}>
        <div className="container">
          <h3>Checkout</h3>
          <div className="row">
            <div className="col-lg-8 col-md-6">

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Customer Info</h5>
                  <b>Required*</b>
                </div>
                <div className={styles.details}>
                  <span>Email*</span>
                  <input type="text" className='input' placeholder='' />
                </div>
              </div>

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Shipping Address</h5>
                  <b>Required*</b>
                </div>
                <div className={styles.details}>
                  <span>Full Name*</span>
                  <input type="text" className='input' placeholder='' />
                </div>
                <div className={styles.details}>
                  <span>Street Address*</span>
                  <input type="text" className='input' placeholder='' />
                </div>
                <div className={styles.details}>
                  <div className="row">
                    <div className="col-lg-4">
                      <span>City*</span>
                      <input type="text" className='input' placeholder='' />
                    </div>
                    <div className="col-lg-4">
                      <span>State*</span>
                      <input type="text" className='input' placeholder='' />
                    </div>
                    <div className="col-lg-4">
                      <span>Zipcode*</span>
                      <input type="text" className='input' placeholder='' />
                    </div>
                  </div>
                </div>
                <div className={styles.details}>
                  <span>Country</span>
                  <input type="text" className='input' placeholder='' />
                </div>
              </div>

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Renting Furniture</h5>
                  <b>Required*</b>
                </div>

                <div className={styles.details}>
                  <div className="row">
                    <div className="col-lg-6">
                      <span>From *</span>
                      <input type="date" className='input' placeholder='' />
                    </div>
                    <div className="col-lg-6">
                      <span>to *</span>
                      <input type="date" className='input' placeholder='' />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Payment Info</h5>
                  <b>Required*</b>
                </div>
                <div className={styles.details}>
                  <span>Card Number*</span>
                  <input type="text" className='input' placeholder='' />
                </div>
                <div className={styles.details}>
                  <div className="row">
                    <div className="col-lg-6">
                      <span>ExpirationDate *</span>
                      <input type="text" className='input' placeholder='' />
                    </div>
                    <div className="col-lg-6">
                      <span>SecurityCode *</span>
                      <input type="text" className='input' placeholder='' />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Item In Order</h5>
                  <b>Required*</b>
                </div>
                <div className={styles.order}>
                  <div className={styles.data}>
                    <div className={styles.item}>
                      <img src={process.env.REACT_APP_API_URL + `media/product_images/bed1.png`} alt="" />
                    </div>
                    <div className={styles.quntity}>
                      <p>Beds1</p>
                      <p>Quantity : 1</p>
                    </div>
                  </div>
                  <div className={styles.amount}>
                    <p>$1000.00</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Order Summary</h5>
                </div>
                <div className={styles.total}>
                  <h5>Subtotal</h5>
                  <b>300</b>
                </div>
                <div className={styles.total}>
                  <h5>Total</h5>
                  <b>350</b>
                </div>


              </div>
              <PayPalScriptProvider options={{ "client-id": "AbWAkTMOzXmtwNpgDnMjNLo-Ids8cGOpDEVzkFzSn-BvCwbtQF95b4vC8WoqBPnwlevWlAFg1mVSs2FV" }}>
              <PayPalButtons 
                  createOrder={createOrder}
                  onApprove={onApprove}
              />
              </PayPalScriptProvider>
              <div className="">
                <p></p>
                <a href="" className="button2">Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Checkout
