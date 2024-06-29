import React from 'react'
import styles from '../styles/footer.module.css'
// import { Style } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <div className={`containerfluid ${styles.footer}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-3">
                            <div className={styles.content1}>
                                <div className="logo">
                                    <img src="./images/logo.png" alt="" className='img-fluid' />
                                </div>
                                <p> This convenient and eco-friendly option promotes sustainability by encouraging the reuse of quality furniture.</p>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3">
                            <div className={styles.content2}>
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><Link to="/products"> <i class="fa-solid fa-angles-right"></i>Products </Link></li>
                                    <li><Link> <i class="fa-solid fa-angles-right"></i>About Us </Link></li>
                                    <li><Link to="/contact"> <i class="fa-solid fa-angles-right"></i>Contact Us </Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3">
                            <div className={styles.content2}>
                                <h3>Our Products</h3>
                                <ul>
                                    <li> <Link to="/products"> <i class="fa-solid fa-angles-right"></i>Beds </Link></li>
                                    <li> <Link to="/products"> <i class="fa-solid fa-angles-right"></i>Chairs</Link> </li>
                                    <li><Link to="/products"> <i class="fa-solid fa-angles-right"></i>Table </Link></li>
                                    <li> <Link to="/products"><i class="fa-solid fa-angles-right"></i>Sofa</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3">
                            <div className={styles.content4}>
                                <h3>Contact</h3>
                                <div className={styles.icon}>
                                    <i class="fa-solid fa-phone"></i>
                                    <span>+91 99788 XXXXX</span>
                                </div>
                                <hr />
                                <div className={styles.icon}>
                                    <i class="fa-regular fa-envelope"></i>
                                    <span>a2ui@gmail.com</span>
                                </div>
                                <hr />
                                <div className={styles.icon}>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>Shahpur,380001</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
