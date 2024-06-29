import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from '../styles/navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch, FiHeart } from "react-icons/fi";
import { BiShoppingBag, BiUser, BiX } from "react-icons/bi";
import { RiMenu2Line } from "react-icons/ri";

import Cart from './Cart';
import FetchContext from '../context/Fetch/FetchContext';
import StateContext from '../context/state/StateContext';


const Navbar = () => {

    const { products } = useContext(StateContext)
    const { getAllProducts } = useContext(FetchContext); 
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const [searchOpen, setSearchOpen] = useState(false);
    

    const menuRef = useRef();
    const cartRef = useRef();
    const searchRef = useRef();

    const handleModelCLickedOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setCartOpen(false);
        }
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleModelCLickedOutside);
        return () => {
            document.removeEventListener('mousedown', handleModelCLickedOutside);
        };
    }, []);

    const sendProfile = () => {
        if (!token) {
            navigate('/login')
        } else {
            navigate('/account')
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

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
                    <div ref={searchRef} className={`${styles.search} ${searchOpen ? styles.active : null}`}>
                        <input type="text" placeholder='Search ...' />
                        <FiSearch style={{ cursor: "pointer" }} onClick={() => {setSearchOpen(!searchOpen)}} />
                        <div className={styles.search_cont}>
                            <div className={styles.search_card}>
                                <img src="/images/furniture2.png" className='img-fluid' alt="" />
                                <h4>Price</h4>
                            </div>
                        </div>
                    </div>
                    <FiHeart style={{ cursor: "pointer" }} />
                    <BiUser style={{ cursor: "pointer" }} onClick={() => { sendProfile() }} />
                    <BiShoppingBag style={{ cursor: "pointer" }} onClick={() => { setCartOpen(true) }} />
                </div>
                <Cart open={cartOpen} close={setCartOpen} cart={cartRef} />
            </nav>
        </>
    )
}

export default Navbar
