import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch, FiHeart } from "react-icons/fi";
import { BiShoppingBag, BiUser, BiX } from "react-icons/bi";
import { RiMenu2Line } from "react-icons/ri";

import Cart from './Cart';


const Navbar = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();



    const menuRef = useRef();
    const cartRef = useRef();

    const handleModelCLickedOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setCartOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleModelCLickedOutside);
        return () => {
            document.removeEventListener('mousedown', handleModelCLickedOutside);
        };
    }, []);


    return (
        <>
            <nav className={styles.navbar}>
                <ul ref={menuRef} className={`${styles.menu_links} ${menuOpen ? styles.active : null}`}>
                    <BiX className={styles.close} style={{ fontSize: "1rem !important" }} onClick={() => setMenuOpen(!menuOpen)} />
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className='d-flex align-items-center'>
                    <RiMenu2Line style={{ cursor: "pointer" }} className={styles.menu_icon} onClick={() => setMenuOpen(true)} />
                    <Link to="/" className={styles.logo}>
                        <img src="/images/logo.png" className='img-fluid' alt="" />
                    </Link>
                </div>
                <div className={styles.icons}>
                    <FiSearch style={{ cursor: "pointer" }} />
                    <FiHeart style={{ cursor: "pointer" }} />
                    <BiUser style={{ cursor: "pointer" }} onClick={() => { navigate('/login') }} />
                    <BiShoppingBag style={{ cursor: "pointer" }} onClick={() => { setCartOpen(true) }} />
                </div>
                <Cart open={cartOpen} close={setCartOpen} cart={cartRef} />
            </nav>
        </>
    )
}

export default Navbar
