import React from 'react'
import styles from '../styles/register.module.css'

function Login() {
  return (
    <>
      <form action="">
        <div className="containerfluid">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.title}>
                            <h1>Login</h1>
                        </div>
                        <div className={styles.forms}>
                            <div className={styles.input_field2}>
                                <span>email</span>
                                <input type="email" className='input' placeholder=''/>
                            </div>
                            <div className={styles.input_field2}>
                                <span>Password</span>
                                <input type="password" className='input' placeholder=''/>
                            </div>
                            <div class={styles.register}>
                               <p>Don't have an account? Register Here </p>
                            </div>
                            <div className={styles.button1}>
                                <button className='button bg-white' type='submit'><span>Login</span> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </form>
    </>
  )
}

export default Login
