import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/profile.module.css'
import toast from 'react-hot-toast';

const Profile = () => {
    const [details, setDetails] = useState({ phone: "", email: "", username: "", password: "" })
    const url = process.env.REACT_APP_BASE_URL
    const navigate = useNavigate();
    const fetchData = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            let data = await fetch(url + `api/profile/?token=${token}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
            )
            let response = await data.json()
            if (response.detail) {
                navigate("/")

            }
            setDetails({
                phone: response.phone_number,
                email: response.email,
                username: response.username
            })
            console.log(response.email === "None");
            if (response.phone_number !== "None") {
                setDetails({ ...details, phone: response.phone_number })
            }
            if (response.email !== "None") {
                setDetails({ ...details, email: response.email })
            }
            if (response.username !== "None") {
                setDetails({ ...details, username: response.username })
            }
        }
        else {
            navigate("/")
            toast.error("Please Login first")
        }
    }
    useEffect(() => {
        // fetchData()
    }, [])
    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("token")
        let result = await fetch(url + `api/updateProfile/?token=${token}`, {
            method: 'POST',
            body: JSON.stringify(details)
        });
        let response = await result.json()
        if (response.success) {
            toast.success("Profile updated successfully")
        } else if (response.error) {
            toast.error(response.error)
        }
        console.log(response);
    }

    const [seen, setSeen] = useState(false);


    return (
        <>

            <div className={styles.profile_container}>
                <h1>Your Profile</h1>
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="col-12 mb-3">
                            <label htmlFor="">Phone Number</label>
                            <div className="input-field2">
                                <input type="phone" placeholder='Enter Phone' name='phone' onChange={handleChange} pattern='[6-9]{1}[0-9]{9}' maxLength={10} minLength={10} style={{ paddingLeft: "20px" }} value={details.phone} required readOnly />
                                <i className="fa-solid fa-phone"></i>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="">Email Address</label>
                            <div className="input-field2">
                                <input type="email" placeholder='Enter Email' name='email' onChange={handleChange} style={{ paddingLeft: "20px" }} value={details.email} required />
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="">Username</label>
                            <div className="input-field2">
                                <input type="text" placeholder='Enter Username' name='username' onChange={handleChange} style={{ paddingLeft: "20px" }} value={details.username} required />
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button type='submit' className='button2'><span>Submit</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )


}


export default Profile;