import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from '../styles/profile.module.css'
import toast from 'react-hot-toast';

const Account = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        toast.success("Logged out Successfully")
    }


    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            navigate("/login")
            toast.error("Please login first")
        }
    }, [])


    return (
        <>
            <div className={`${styles.profile} padd-x`} style={{marginTop: "90px"}}>
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <div className={styles.button_container}>
                            <Link to="/account/profile">Profile</Link>
                            <Link to="/account/address">Addresses</Link>
                            <Link to="/account/yourBooking">Your Booking</Link>
                            <Link onClick={handleLogout}>Logout</Link>
                        </div>
                    </div>
                    <div className="col-lg-8 mb-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;