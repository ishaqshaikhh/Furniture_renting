import React from 'react'
import ProductCard from '../components/ProductCard'
import styles from '../styles/productPage.module.css'

const ProductPage = () => {
  return (
    <>
        <div className={`${styles.page} container-fluid padd-x`}>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <ProductCard />
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPage
