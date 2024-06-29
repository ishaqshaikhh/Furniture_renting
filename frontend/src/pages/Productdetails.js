import React from 'react'
import styles from '../styles/productdetails.module.css'
import { Link } from 'react-router-dom'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPackageLight } from "react-icons/pi";

function Productdetails() {
  return (
    <>
      <div className={`containerfluid ${styles.details}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className={styles.prodimg}>
                        <img src="../images/furniture2.png"  alt="" className="imgfluid" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className={styles.content}>
                        <h3 className={styles.prodtitle}>Velvet Accent Chair</h3>

                        <div className={styles.price}>
                            <p className={styles.original}>₹450</p>
                            <p className={styles.discount}>₹350</p>
                        </div>

                        <div className={styles.stock}>
                            <p>SKU: <span>0001</span> </p>
                            <p>Category: <span>Category Name</span> </p>
                        </div>
                       
                        <div className={styles.desc}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rerum sunt totam quae atque laboriosam aliquid ex, recusandae velit praesentium.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, enim? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolores.
                            </p>
                        </div>

                        <div className={styles.add}>
                            <span className={styles.quantity}>
                                <input type="number" />
                            </span>
                            <Link className='button'>
                                <span class="text-wrapper" data-text="Add to Cart"></span>
                                <div class="fill"></div>
                            </Link>
                        </div>
                        
                        <div className={styles.border}></div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={styles.status}>
                                    <div className={styles.icon}>
                                        <PiPackageLight />
                                    </div>
                                    <div className={styles.para}>
                                        <h5>Free Shipping</h5>
                                        <p>You will love at great low prices</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-6">
                                <div className={styles.status}>
                                    <div className={styles.icon}>
                                        <LiaShippingFastSolid />
                                    </div>
                                    <div className={styles.para}>
                                        <h5>Fast Delivery</h5>
                                        <p>Experience the joy of fast shipping</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Productdetails
