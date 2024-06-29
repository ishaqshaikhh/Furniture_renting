import React from 'react'
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom'
import { FiSearch, FiHeart } from "react-icons/fi";
import { BiShoppingBag, BiUser } from "react-icons/bi";


const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.menu_links}>
                    <li><Link>Home</Link></li>
                    <li><Link>Products</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
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
