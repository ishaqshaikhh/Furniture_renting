import React, { useState } from 'react'
import styles from '../styles/contact.module.css'




function Contact() {
   
    return (
        <>
            <div className={`containerfluid ${styles.contact}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className={styles.contactform}>
                                {/* <div className={styles.para}>
										<p>Contact Us</p>
									</div> */}
                                <div className={styles.para1}>
                                    <h2>Have Any Query? Please Contact Us!</h2>
                                    <p>By diversifying its revenue streams, optimizing operations, and fostering
                                        meaningful partnerships, Al Ameen Hospital ensures a sustainable future.
                                        This financial stability guarantees the hospital's continued ability to
                                        provide comprehensive healthcare services to the needy and less
                                        privileged individuals in the community</p>
                                </div>
                                <div className='row'>
                                    <div className="col-lg-6">
                                        <div className={styles.input_field2} >
                                            <span>Name</span>
                                            <input type="text" className='input' placeholder='Your Name..' style={{ padding: "5px 10px" }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={styles.input_field2}>
                                            <span>Email</span>

                                            <input type="text" className='input' placeholder='Enter Email..' style={{ padding: "5px 10px" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-12">
                                        <div className={styles.input_field2}>
                                            <span>Phone no.</span>
                                            <input type="text" className='input' placeholder='Your Phone no..' style={{ padding: "5px 10px" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className={styles.input_field2}>
                                            <span>Subject</span>
                                            <textarea className='pt-2' name="textarea" id="" cols="70" rows="8" placeholder='Message here...' style={{ padding: "5px 10px" }}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 d-flex justify-content-between align-items-center">
                                    <button className='button bg-white' type='submit'><span>Send Message</span> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* <div className={styles.map}>

							</div> */}
                            <div className={styles.contactsection}>
                                <div className={styles.location}>
                                    <div className={styles.icon}>
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className={styles.content}>
                                        <span>Address</span>
                                        <p>Shahpur, 380001</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contactsection}>
                                <div className={styles.location}>
                                    <div className={styles.icon}>
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <div className={styles.content}>
                                        <span>Call Us Now</span>
                                        <p>+91 99788 XXXXX</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contactsection}>
                                <div className={styles.location}>
                                    <div className={styles.icon}>
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className={styles.content}>
                                        <span>Mail Us Now</span>
                                        <p>a2ui@gmial.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
