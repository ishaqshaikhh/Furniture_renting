import React, { useState, useEffect } from 'react';
import styles from '../styles/profile.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Mock booking data (replace with API call in production)

const url = process.env.REACT_APP_BASE_URL


function YourBookings() {
  const [isLoading, setIsLoading] = useState(true);
  const [userBookings, setUserBookings] = useState([]);
  const navigate = useNavigate();

  const getAllBookings = async () => {
    let token = localStorage.getItem('token');
    let response = await axios.get(url + `api/getAllBookings?token=${token}`)
    // console.log(response.data.bookings);
    setUserBookings(JSON.parse(response.data.bookings));
  }

  useEffect(() => {
    // Simulate API call (replace with actual API call)
    let token = localStorage.getItem('token');
    if (!token) {
      navigate("/")
      toast.error("Please login first")
    }
    getAllBookings();
  }, []);

  const handleGenerateInvoice = async (id) => {
    let token = localStorage.getItem('token');
    let result = await fetch(url + `api/generateInvoice/${id}/?token=${token}`)
    if (result.ok) {
      let blob = await result.blob();
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `CBWLIV${id}.pdf`;
      link.click();
    } else {
      console.error("Invoice generation failed");
    }

  }

  return (
    <>
      <div className={styles.profile_container}>
        {userBookings.length > 0 ? (<>
          <h1>Your Bookings</h1>

          {userBookings.map((booking) => {
            return (<div className={styles.card}>
              <ul className={styles.info}>
                <li><b>Pickup:</b>{booking.fields.pickup_address}</li>
                {/* <li><b>Dropoff:</b>{booking.fields.destination_city}</li> */}
                <li><b>Date & Time:</b>{new Date(booking.fields.booking_time).toLocaleDateString()}, {new Date(booking.fields.booking_time).toLocaleTimeString()}</li>
                <li><b>Cab Method:</b>{booking.fields.cab_method}</li>
                <li style={{ textTransform: "capitalize" }}><b>Car Type:</b>{booking.fields.car}</li>
                <li><b>Fare:</b>&#8377;{booking.fields.total_amount}/-</li>
                <li><b>Booking Status:</b><span style={{ color: 'green', fontWeight: "500", textTransform: "capitalize" }}>{booking.fields.booking_status.toLowerCase()}</span></li>
              </ul>
              <div className={styles.option2}>
                {/* <i className="fa-solid fa-file-arrow-down" onClick={() => { handleGenerateInvoice(booking.pk); }}></i> */}
                {/* <i class="fa-solid fa-thumbs-up"></i> */}
              </div>
            </div>)
          })}

        </>) : (<>
          <p>New to Cabwale.net ? Welcome aboard! Book your first comfortable and convenient ride with us today.</p>
          <p>We offer a wide range of cabs to choose from, ensuring you get the perfect fit for your needs. All our cabs are well-maintained and driven by professional drivers.</p>
          <a className='button2 my-3' href="/#bookingBox" ><span>Book Now</span></a>

        </>)}
      </div>
    </>
  );
}

export default YourBookings;


// <div className="your-bookings">
//       {isLoading ? (
//         <p className="loading">Loading your bookings...</p>
//       ) : (
//         userBookings.length > 0 ? (
//           <ul className="bookings-list">
//             {userBookings.map((booking) => (
//               <>
//                 <li key={booking.id} className="booking-item">
//                   <div className="booking-details">
//                     <p>
//                       <b>Pickup:</b> {booking.fields.pickup_address}
//                     </p>
//                     <p>
//                       <b>Dropoff:</b> {booking.fields}
//                     </p>
//                     <p>
//                       <b>Date:</b> {booking.date}
//                     </p>
//                     <p>
//                       <b>Time:</b> {booking.time}
//                     </p>
//                     <p>
//                       <b>Cab Type:</b> {booking.cabType}
//                     </p>
//                     <p>
//                       <b>Fare:</b> {booking.fare}
//                     </p>
//                   </div>
//                 </li>
//                 <hr />
//               </>
//             ))}
//           </ul>
//         ) : (
//           <p className="no-bookings">No bookings found.</p>
//         )
//       )}
//     </div>