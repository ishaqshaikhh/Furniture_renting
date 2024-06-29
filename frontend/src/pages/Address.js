import React, { useEffect, useState } from 'react'
import styles from '../styles/profile.module.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Address = () => {

    // const url = process.env.REACT_APP_BASE_URL
    // const lurl = process.env.REACT_APP_URL
    // const [dropDown, setDropDown] = useState(false);
    // const [select, setSelect] = useState("");
    // const [userAddress, setUserAddress] = useState([]);
    // const [editing, setEditing] = useState(false)
    // const [adding, setAdding] = useState(false)
    // const [formDetails, setFormDetails] = useState({ address: "", city: "", state: "Ahmedabad", pincode: "" });
    // let token = localStorage.getItem('token');

    // const dropSelect = (select) => {
    //     setSelect(select);
    //     setformData({ ...formData, state: "Ahmedabad" })
    // }
    // const getAllAddresses = async () => {
    //     let token = localStorage.getItem('token');
    //     let response = await axios.get(url + `api/getAllAddresses?token=${token}`)
    //     if (response.data.success) {
    //         setUserAddress(JSON.parse(response.data.success));
    //         if(JSON.parse(response.data.success).length === 0){
    //             setAdding(true)
    //         }
    //     } else {
    //             setAdding(true)
    //     }
    // }

    // const handleAddAddress = async (e) => {
    //     e.preventDefault();
    //     if (e.target.checkValidity()) {
    //         if (formDetails.state === "") {
    //             toast.error("Please select state");
    //             return;

    //         }
    //         let data = await fetch(url + `api/addAddress/?token=${token}`, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formDetails)
    //         });
    //         let result = await data.json();
    //         console.log(result);
    //         if (result.success) {
    //             alert("Address added successfully");
    //             getAllAddresses();
    //             setFormDetails({ address: "", city: "", state: "", pincode: "" }); // Reset form details after adding address
    //         }
    //     }
    // };


    // useEffect(() => {
    //     getAllAddresses()
    // }, [])

    // const handleChange = (e) => {
    //     setformData({ ...formData, [e.target.name]: e.target.value })
    // }

    // const handleDelete = async (id) => {
    //     let token = localStorage.getItem('token');
    //     if (window.confirm(`Are you sure you want to delete this address ?`)) {
    //         let result = await axios.delete(url + `api/deleteAddress/${id}/?token=${token}`)
    //         let response = result.data;
    //         const array = [...userAddress];
    //         const deletedArray = array.filter(item => item.pk !== id);
    //         setUserAddress(deletedArray)
    //     }
    // }
    // const [formData, setformData] = useState({ address_id: "", address: "", city: "", state: "", pincode: "" })

    // const handleUpdate = async (id) => {
    //     setEditing(true)
    //     let address = userAddress.filter(address => address.pk === id);
    //     setformData({ ...formData, address_id: address[0].pk, address: address[0].fields.address, city: address[0].fields.city, state: address[0].fields.state, pincode: address[0].fields.pincode })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     let token = localStorage.getItem('token');
    //     let result = await fetch(url + `api/updateAddress/?token=${token}`, {
    //         method: 'POST',
    //         body: JSON.stringify(formData)
    //     }
    //     )
    //     let response = await result.json()
    //     if (response.success) {
    //         setAdding(false)
    //         let newFields = { address_id: formData.address_id, address: formData.address, city: formData.city, state: formData.state, pincode: formData.pincode }
    //         setUserAddress(prevAddresses => {
    //             return prevAddresses.map(address =>
    //                 address.pk === formData.address_id ? { ...address, fields: { ...address.fields, ...newFields } } : address
    //             )
    //         })
    //         toast.success("Address updated successfully")
    //     } else {
    //         toast.error("Something went wrong");
    //     }
    //     setEditing(false);
    // }


    return (
        <>
           
        </>
    )
}

export default Address


//  <div className={styles.profile_container}>
//                 {userAddress.length > 0 && (
//                     <>
//                         <div className="d-flex justify-content-between align-items-center w-100 mb-3">
//                             <h1 className='mb-0'>Your Addresses</h1>
//                             <button className={`button2 active ${userAddress.length >= 3 ? "d-none": ""}`}  style={{fontSize: ".8rem", padding: "10px 20px"}} type='button' onClick={() => { setAdding(!adding); }}><span>Add New Address</span></button>
//                         </div>
//                         <div className="row">
//                             {userAddress && userAddress.map((item, index) => {
//                                 return (<div className={styles.card} key={index}>
//                                     <p>{item.fields.address}, {item.fields.city}, {item.fields.state} - {item.fields.pincode}</p>
//                                     <div className={styles.option}>
//                                         <i className="fa-solid fa-trash" onClick={() => handleDelete(item.pk)}></i>
//                                         <i className="fa-solid fa-pen-to-square" onClick={() => handleUpdate(item.pk)}></i>
//                                     </div>
//                                 </div>)
//                             })}
//                             <form className={`${editing ? "" : "d-none"}`} onSubmit={handleSubmit}>
//                                 <h3>Update Your Address</h3>
//                                 <div className={`row mt-4`}>
//                                     <div className="col-md-6 mb-3">
//                                         <label htmlFor="">Address</label>
//                                         <div className="input-field2">
//                                             <input type="text" name="address" className='input b-input' placeholder='Address - Ex: ABC Park' required style={{ paddingLeft: "20px" }} onChange={handleChange} value={formData.address} />
//                                             <i className="fa-solid fa-location-dot"></i>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6 mb-3">
//                                         <label htmlFor="">City</label>
//                                         <div className="input-field2">
//                                             <input type="text" name="city" className='input b-input' placeholder='City - Ex: Ahmedabad' required style={{ paddingLeft: "20px" }} onChange={handleChange} value={formData.city} />
//                                             <i className="fa-solid fa-city"></i>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6 mb-3">
//                                         <label htmlFor="">Pincode</label>
//                                         <div className="input-field2">
//                                             <input type="text" name="pincode" className='input b-input' placeholder='Pincode - Ex: 112200' id="" style={{ paddingLeft: "20px" }} onChange={handleChange} value={formData.pincode} />
//                                             <i className="fa-solid fa-location-pin"></i>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-6 mb-3">
//                                         <label htmlFor="" className='mb-1'>Select State</label>
//                                         <div className={`dropdown ${dropDown ? 'active' : ''}`} onClick={() => setDropDown(!dropDown)}>
//                                             <div className="select" style={{ borderColor: "#fff", padding: "15px 20px" }}>{formData.state == "" ? 'select State' : formData.state}</div>
//                                             <i className="fa-solid fa-angle-up icon-right"></i>
//                                             <ul>
//                                                 {state.map((item, index) => {
//                                                     return <li key={index} onClick={() => dropSelect(item.name)}>{item.name}</li>
//                                                 })}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="mt-3 d-flex justify-content-between align-items-center">
//                                     <button className='button2' type='submit'><span>Submit</span></button>
//                                     <button className='button2 active' type='button' onClick={() => { setEditing(false); }}><span>Cancel</span></button>
//                                 </div>
//                             </form>
//                         </div>
//                     </>
//                 )}
//                 {adding === true && userAddress.length <= 3 && (
//                     <form onSubmit={handleAddAddress} > 
//                         <h3>Add New Address</h3>
//                         <div className={`row mt-4`} >
//                             <div className="col-md-6 mb-3">
//                                 <label htmlFor="">Address</label>
//                                 <div className="input-field2">
//                                     <input type="text" name="address" className='input b-input' placeholder='Address - Ex: ABC Park' required style={{ paddingLeft: "20px" }} onChange={(e) => { setFormDetails({ ...formDetails, address: e.currentTarget.value }) }} value={formDetails.address} />
//                                     <i className="fa-solid fa-location-dot"></i>
//                                 </div>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <label htmlFor="">City</label>
//                                 <div className="input-field2">
//                                     <input type="text" name="city" className='input b-input' placeholder='City - Ex: Ahmedabad' required style={{ paddingLeft: "20px" }} onChange={(e) => { setFormDetails({ ...formDetails, city: e.currentTarget.value }) }} value={formDetails.city} />
//                                     <i className="fa-solid fa-city"></i>
//                                 </div>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <label htmlFor="">Pincode</label>
//                                 <div className="input-field2">
//                                     <input type="text" name="pincode" className='input b-input' placeholder='Pincode - Ex: 112200' id="" required minLength={6} maxLength={6} style={{ paddingLeft: "20px" }} onChange={(e) => { setFormDetails({ ...formDetails, pincode: e.currentTarget.value }) }} value={formDetails.pincode} />
//                                     <i className="fa-solid fa-location-pin"></i>
//                                 </div>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <label htmlFor="" className='mb-1'>Select State</label>
//                                 <div className={`dropdown ${dropDown ? 'active' : ''}`} onClick={() => setDropDown(!dropDown)}>
//                                     <div className="select" style={{ borderColor: "#fff", padding: "15px 20px" }}>{formDetails.state == "" ? 'select State' : formDetails.state}</div>
//                                     <i className="fa-solid fa-angle-up icon-right"></i>
//                                     <ul>
//                                         {state.map((item, index) => {
//                                             return <li key={index} onClick={() => { dropSelect(item.name); setFormDetails({ ...formDetails, state: item.name }) }}>{item.name}</li>
//                                         })}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-3 d-flex justify-content-between align-items-center">
//                             <button className='button2' type='submit'><span>Submit</span></button>
//                             <button className='button2 active' type='button' onClick={() => { setAdding(false); }}><span>Cancel</span></button>
//                         </div>
//                     </form>
//                 )}
//             </div>