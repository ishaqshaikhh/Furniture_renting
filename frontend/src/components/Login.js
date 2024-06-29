import React from 'react'
import styles from '../styles/register.module.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <div className={styles.formContainer}>
                <form action="">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className={styles.title}>
                                    <h1>Welcome Back</h1>
                                </div>
                                <div className={styles.forms}>
                                    <div className={styles.input_field2}>
                                        <span>Email</span>
                                        <input type="email" className='input' placeholder='' />
                                    </div>
                                    <div className={styles.input_field2}>
                                        <span>Password</span>
                                        <input type="password" className='input' placeholder='' />
                                    </div>
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
