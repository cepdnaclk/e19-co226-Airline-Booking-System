import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import "./Flight.css";
import { Nav } from "./Nav";
import { useLocation } from "react-router-dom";
import auth from "../services/booking_service";

// Helper function to generate random 15-digit values
const generateRandom15DigitValue = () => {
  const randomNumber = Math.floor(Math.random() * 1000000000000000); // Random number between 0 and 999999999999999
  return randomNumber.toString().padStart(15, "0"); // Pad the number with leading zeros to ensure it has 15 digits
};

export const BookingForm = () => {
  const location = useLocation();
  const { flight } = location.state || {};

  const [id, setId] = useState(flight?.flightId || "");
  const [status, setStatus] = useState(flight?.flightStatus || "");
  const [seatNumber, setSeatNumber] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [fareClass, setFareClass] = useState("");
  const [passengerId, setPassengerId] = useState("");
  const [email, setEmail] = useState("");
  const [reservationId, setReservationId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [promotions, setPromotions] = useState([]);
  const [selectedPromotion, setSelectedPromotion] = useState("");

  useEffect(() => {
    fetchPromotions();
    // Set the initial values for passengerId and reservationId
    setPassengerId(generateRandom15DigitValue());
    setReservationId(generateRandom15DigitValue());
  }, []);

  const fetchPromotions = async () => {
    try {
      // Implement your API call to fetch promotions here, if needed
      // For example, you can use the following code if you have a function in your backend service to fetch promotions
      // const fetchedPromotions = await fetchPromotionsFromBackend();
      // setPromotions(fetchedPromotions);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "flightId":
        setId(value);
        break;
      case "flightStatus":
        setStatus(value);
        break;
      case "seatNumber":
        setSeatNumber(value);
        break;
      case "paymentInfo":
        setPaymentInfo(value);
        break;
        case "fareClass":
          // Update the fare class value
          setFareClass(value);
    
          // Set the payment info based on the selected fare class
          switch (value) {
            case "Economy":
              setPaymentInfo("120000");
              break;
            case "Business":
              setPaymentInfo("200000");
              break;
            case "First Class":
              setPaymentInfo("350000");
              break;
            default:
              setPaymentInfo("");
              break;
          }
          break;
      case "passengerId":
        setPassengerId(value);
        break;
      case "reservationId":
        setReservationId(value);
        break;

      case "email":
        setEmail(value);
        break;
      case "selectedPromotion":
        setSelectedPromotion(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.addBooking({
        flightId: id,
        flightStatus: status,
        seatNumber: seatNumber,
        paymentInfo: paymentInfo,
        fareClass: fareClass,
        passengerId: passengerId,
        reservationId: reservationId,
        email:email,
        selectedPromotion: selectedPromotion,
      });

      console.log(response);
      setSuccessMessage("Booking details saved successfully.");
      setId("");
      setStatus("");
      setSeatNumber("");
      setPaymentInfo("");
      setFareClass("");
      setPassengerId(generateRandom15DigitValue());
      setReservationId(generateRandom15DigitValue());
      setEmail("");
      setSelectedPromotion("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="container">
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            BOOKING ID:
            <input
              className="input"
              type="number"
              name="flightId"
              value={id}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            EMAIL:
            <input
              className="input"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            STATUS:
            <input
              className="input"
              type="text"
              name="flightStatus"
              value={status}
              onChange={handleChange}
            />
          </label>

          

          <label className="label">
            FARE CLASS:
            <select
              className="input"
              name="fareClass"
              value={fareClass}
              onChange={handleChange}
            >
              <option value="">Select Fare Class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </label>

          <label className="label">
            SEAT NUMBER:
            <input
              className="input"
              type="number"
              name="seatNumber"
              value={seatNumber}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            PAYMENT INFO:
            <input
              className="input"
              type="text"
              name="paymentInfo"
              value={paymentInfo}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            PASSENGER ID:
            <input
              className="input"
              type="number"
              name="passengerId"
              value={passengerId}
              onChange={handleChange}
              readOnly // Make this field unchangeable
            />
          </label>

          <label className="label">
            RESERVATION ID:
            <input
              className="input"
              type="number"
              name="reservationId"
              value={reservationId}
              onChange={handleChange}
              readOnly // Make this field unchangeable
            />
          </label>

          <label className="label">
            SELECT PROMOTION:
            <select
              className="input"
              name="selectedPromotion"
              value={selectedPromotion}
              onChange={handleChange}
            >
              {/* Add the default option here */}
              <option value="">Select Promotion (Optional)</option>

              {/* Map over the promotions array to render options dynamically */}
              {/* {promotions.map((promotion) => (
                <option key={promotion.id} value={promotion.id}>
                  {promotion.name} - {promotion.discount}% off
                </option>
              ))} */}
            </select>
          </label>

          <button className="button" type="submit">
            ADD FLIGHT
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};