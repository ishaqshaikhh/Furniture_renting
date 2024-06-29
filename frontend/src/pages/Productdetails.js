import React from 'react'
import styles from '../styles/productdetails.module.css'

function Productdetails() {
  return (
    <>
      <div className={`containerfluid ${styles.details}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className={styles.prodimg}>
                        <img src="../images/furniture2.png"  alt="" className="imgfluid" />
                    </div>
                </div>
                <div className="col-lg-6">
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

                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Productdetails
