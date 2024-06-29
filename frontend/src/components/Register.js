import React, { useState } from 'react'
import styles from '../styles/register.module.css'
import toast from 'react-hot-toast';

const Register = () => {

    const [formData, setFormData] = useState({full_Name: '', email: '', password: ''});
    const [error, setError] = useState('');
    

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
                console.log("successfully Logged in");
                toast.success("successfully Created")
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
                                    <h1>Regestration</h1>
                                </div>
                                <div className={styles.forms}>
                                    <div className={styles.input_field2} >
                                        <span>Full Name</span>
                                        <input type="text" className='input' name='full_name' onChange={handleChange} placeholder='' />
                                    </div>
                                    <div className={styles.input_field2}>
                                        <span>Email</span>
                                        <input type="email" className='input' name='email' onChange={handleChange} placeholder='' />
                                    </div>
                                    <div className={styles.input_field2}>
                                        <span>Password</span>
                                        <input type="password" className='input' name='password' onChange={handleChange} placeholder='' />
                                    </div>
                                    <p>{error}</p>
                                    <div className={styles.formcheck}>
                                        <input className={styles.formcheckinput} type="checkbox" value="" id="" />
                                        <label className="form-check-label" for="" style={{ padding: "0px 10px" }}> I read terms & conditions.</label>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className='button' type='submit'>
                                            <span className="text-wrapper" data-text="Submit"></span>
                                            <div className="fill"></div>
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
