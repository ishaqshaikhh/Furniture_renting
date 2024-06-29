import React from 'react'
import styles from '../styles/productCard.module.css'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from "react-icons/ri";


const ProductCard = () => {
    return (
        <>
            <Link className={styles.product}>
                <img src="/images/furniture2.png" className='img-fluid' alt="" />
                <div className="d-flex align-items-center justify-content-between w-100">
                    <div>
                        <h4>Mad Comfort Chars</h4>
                        <span className={styles.price}>&#8377; 300</span>
                    </div>
                    <div className={styles.icon}>
                        <RiArrowRightUpLine />
                    </div>
                </div>

            </Link>
        </>
    )
}

export default ProductCard
