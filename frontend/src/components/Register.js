import React from 'react'
import styles from '../styles/register.module.css'

function Register() {
    return (
        <>
            <div className={styles.formContainer}>
                <form action="">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className={styles.title}>
                                    <h1>Regestration</h1>
                                </div>
                                <div className={styles.forms}>
                                    <div className={styles.input_field2} >
                                        <span>Username</span>
                                        <input type="text" className='input' placeholder='' />
                                    </div>
                                    <div className={styles.input_field2}>
                                        <span>Email</span>
                                        <input type="email" className='input' placeholder='' />
                                    </div>
                                    <div className={styles.input_field2}>
                                        <span>Password</span>
                                        <input type="password" className='input' placeholder='' />
                                    </div>
                                    <div class={styles.formcheck}>
                                        <input class={styles.formcheckinput} type="checkbox" value="" id="" />
                                        <label class="form-check-label" for="" style={{ padding: "0px 10px" }}> I read terms & conditions.</label>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className='button' type='submit'>
                                            <span class="text-wrapper" data-text="Submit"></span>
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

export default Register
