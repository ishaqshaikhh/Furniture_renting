import React from 'react'
import styles from '../styles/checkout.module.css'

function Checkout() {
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
                  <h5>Renting Furniture</h5>
                  <b>Required*</b>
                </div>
                
                <div className={styles.details}>
                  <div className="row">
                    <div className="col-lg-6">
                      <span>From *</span>
                      <input type="date" className='input' placeholder=''/>
                    </div>
                    <div className="col-lg-6">
                      <span>to *</span>
                      <input type="date" className='input' placeholder=''/>
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

              <div className={styles.customer}>
                <div className={styles.head}>
                  <h5>Item In Order</h5>
                  <b>Required*</b>
                </div>
                <div className={styles.order}>
                  <div className={styles.data}>
                    <div className={styles.item}>
                      <img src="../images/sofa.jpg" alt="" />
                    </div>
                    <div className={styles.quntity}>
                      <p>Sofa</p>
                      <p>Quantity : 1</p>
                    </div>
                  </div>
                  <div className={styles.amount}>
                    <p>$399.00</p>
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
