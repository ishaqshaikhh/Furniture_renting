import React from 'react'
import styles from '../styles/productCard.module.css'
import { Link } from 'react-router-dom'
import { RiArrowRightUpLine } from "react-icons/ri";

const ProductCard = ({data}) => {
    return (
        <>
            <Link to={`/productDetails/${data.pk}`} className={styles.product}>
                <img src={process.env.REACT_APP_API_URL + `media/${data.fields.image1}`} className='img-fluid' alt="" />
                <div className="d-flex align-items-center justify-content-between w-100">
                    <div>
                        <h4>{data.fields.name}</h4>
                        <span className={styles.price}>&#8377; {data.fields.price}</span>
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
