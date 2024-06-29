import React from 'react'
import styles from '../styles/register.module.css'

function Register() {   
  return (
    <>
      <form action="">
        <div className="containerfluid">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.title}>
                            <h1>Regestration</h1>
                        </div>
                        <div className={styles.forms}>
                            <div className={styles.input_field2} >
                                <span>Username</span>
                                <input type="text" className='input' placeholder=''/>
                            </div>
                            <div className={styles.input_field2}>
                                <span>email</span>
                                <input type="email" className='input' placeholder=''/>
                            </div>
                            <div className={styles.input_field2}>
                                <span>Password</span>
                                <input type="password" className='input' placeholder=''/>
                            </div>
                            <div class={styles.formcheck}>
                                <input class={styles.formcheckinput} type="checkbox" value="" id="" />
                                <label class="form-check-label" for="" style={{ padding: "0px 10px"}}> I read terms & conditions.</label>
                            </div>
                            <div className={styles.button1}>
                                <button className='button bg-white' type='submit'><span>Register</span> </button>
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

export default Register
