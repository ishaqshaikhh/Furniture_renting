import React, { useState } from 'react'
import styles from '../styles/register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

function Login() {

    const [formData, setFormData] = useState({full_Name: '', email: '', password: ''});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch(process.env.REACT_APP_API_URL + "api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            const json = await response.json();
            if (json.success) {
                localStorage.setItem("token", json.access)
                navigate('/')
                console.log("successfully Logged In");
                toast.success("successfully Logged In")
            } else {
                setError(json.error)
                console.log(json.error);
                toast.error("Something went wrong")
            }

            
        } catch (error) {
            setError(error)
            console.log(error);
            toast.error("Some ERror occcured")
        }
    }
    

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }


    return (
        <>
            <div className={styles.formContainer}>
                <form action="" onSubmit={handleSubmit}>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className={styles.title}>
                                    <h1>Welcome Back</h1>
                                </div>
                                <div className={styles.forms}>
                                    <div className={styles.input_field2}>
                                        <span>Email</span>
                                        <input type="email" className='input' name='email' onChange={handleChange} placeholder='' />
                                    </div>
                                    <div className={styles.input_field2}>
                                        <span>Password</span>
                                        <input type="password" className='input' name='password' onChange={handleChange} placeholder='' />
                                    </div>
                                    <p>{error}</p>
                                    <div class={styles.register}>
                                        <p>Don't have an account? <Link to="/register" style={{color: "var(--accent1-color)"}}>Register Here</Link></p>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className='button' type='submit'>
                                            <span class="text-wrapper" data-text="Login"></span>
                                            <div class="fill"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
