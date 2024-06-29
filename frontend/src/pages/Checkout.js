import React from 'react'
import styles from '../styles/checkout.module.css'

function Checkout() {
  return (
    <>
      <div className={`containerfluid ${styles.checkout}`}>
        <div className="container">
          <h3>Checkout</h3>
          <div className="row">
            <div className="col-8">

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Customer Info</h5>
                  <b>Required*</b>
                </div>
                <div className={styles.details}>
                  <span>Email*</span>
                  <input type="text" className='input' placeholder=''/>
                </div>
              </div>

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Shipping Address</h5>
                  <b>Required*</b>
                </div>
                <div className={styles.details}>
                  <span>Full Name*</span>
                  <input type="text" className='input' placeholder=''/>
                </div>
                <div className={styles.details}>
                  <span>Street Address*</span>
                  <input type="text" className='input' placeholder=''/>
                </div>
                <div className={styles.details}>
                  <div className="row">
                    <div className="col-lg-4">
                      <span>City*</span>
                      <input type="text" className='input' placeholder=''/>
                    </div>
                    <div className="col-lg-4">
                      <span>State*</span>
                      <input type="text" className='input' placeholder=''/>
                    </div>
                    <div className="col-lg-4">
                      <span>Zipcode*</span>
                      <input type="text" className='input' placeholder=''/>
                    </div>
                  </div>
                </div>
                <div className={styles.details}>
                  <span>Country</span>
                  <input type="text" className='input' placeholder=''/>
                </div>
              </div>

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Payment Info</h5>
                  <b>Required*</b>
                </div>
                <div className={styles.details}>
                  <span>Card Number*</span>
                  <input type="text" className='input' placeholder=''/>
                </div>
                <div className={styles.details}>
                  <div className="row">
                    <div className="col-lg-6">
                      <span>ExpirationDate *</span>
                      <input type="text" className='input' placeholder=''/>
                    </div>
                    <div className="col-lg-6">
                      <span>SecurityCode *</span>
                      <input type="text" className='input' placeholder=''/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Order Summary</h5>
                </div>
                <div className={styles.details}>
                  <p>Subtotal</p>
                  <p>Total</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Checkout
