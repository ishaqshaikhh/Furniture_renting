import React from 'react'
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom'
import { FiSearch, FiHeart } from "react-icons/fi";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { RiMenu2Line } from "react-icons/ri";


const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.menu_links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <RiMenu2Line style={{cursor: "pointer"}} className={styles.menu_icon} />
                <div className={styles.logo}>
                    <img src="/images/logo.png" className='img-fluid' alt="" />
                </div>
                <div className={styles.icons}>
                    <FiSearch style={{ cursor: "pointer" }} />
                    <FiHeart style={{ cursor: "pointer" }} />
                    <BiUser style={{ cursor: "pointer" }} />
                    <BiShoppingBag style={{ cursor: "pointer" }} />
                </div>
            </nav>
        </>
    )
}

export default Navbar
