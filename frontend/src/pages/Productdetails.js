import React, { useEffect, useState } from 'react'
import styles from '../styles/productdetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiPackageLight } from "react-icons/pi";
import { BiX, BiMinus, BiPlus } from "react-icons/bi";
import toast from 'react-hot-toast';

function Productdetails() {

    const { id } = useParams();

    console.log(id);
    const [data, setData] = useState('');
    const [quantity, setQuantity] = useState(0);


    const getProduct = async () => {
        try {

            const response = await fetch(process.env.REACT_APP_API_URL + `api/getProduct/?product_id=${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const json = await response.json();
            const productData = JSON.parse(json.product)
            if (json.success) {
                console.log(json);
                console.log(productData);
                setData(productData[0].fields)
            } else {
                toast.error(json.error)
                console.log(json.error);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    })

    return (
        <>
            <div className={`containerfluid ${styles.details}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className={styles.prodimg}>
                                <img src={process.env.REACT_APP_API_URL + `media/${data.image1}`} alt="" className="imgfluid" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className={styles.content}>
                                <h3 className={styles.prodtitle}>{data.name}</h3>

                                <div className={styles.price}>
                                    <p className={`${styles.discount} me-3`}>₹{data.discounted_price}</p>
                                    <p className={styles.original}>₹{data.price}</p>
                                </div>

                                <div className={styles.stock}>
                                    <p>SKU: <span>{data.sku_no}</span> </p>
                                </div>

                                <div className={styles.desc}>
                                    <p>{data.description}
                                    </p>
                                </div>

                                <div className={styles.add}>
                                    <div className="qty-container" style={{ width: "fit-content", marginRight: "20px" }}>
                                        <button className="qty-btn-minus btn-light" type="button">
                                            <BiMinus /></button>
                                        <input type="text" name="qty" value="0" className="input-qty" />
                                        <button  className="qty-btn-plus btn-light" type="button">
                                            <BiPlus /></button>
                                    </div>
                                    <Link className='button'>
                                        <span class="text-wrapper" data-text="Add to Cart" onClick={()=>{handleAddToCart(id)}}></span>
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
