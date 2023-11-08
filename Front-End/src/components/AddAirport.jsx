import React, { useState } from "react";
import { Footer } from "./Footer";
import "./Flight.css"; // Import the CSS file
import { Header } from "./Header";
import auth from "../services/airport_service";

export const AddAirPort = () => {
  const [airportCode, setAirportCode] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "airportCode":
        setAirportCode(value);
        break;
      case "name":
        setName(value);
        break;
      case "city":
        setCity(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "contactInfo":
        setContactInfo(value);
        break;
      default:
        break;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.addAirport(airportCode, name, city, country, contactInfo);
      console.log(response);
      // Show success message
      setSuccessMessage("Airport saved successfully.");
      // Reset form fields
      setAirportCode("");
      setName("");
      setCity("");
      setCountry("");
      setContactInfo("");
    } catch (error) {
      console.log(error);
      // Handle any errors that occurred during the API call
    }
  };
  

  return (
    <div>
      <Header />
      <div className="container">
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            AIRPORT CODE:
            <input
              className="input"
              type="number"
              name="airportCode"
              value={airportCode}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            NAME:
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            CITY:
            <input
              className="input"
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            COUNTRY:
            <input
              className="input"
              type="text"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </label>

          <label className="label">
            CONTACT INFO:
            <input
              className="input"
              type="text"
              name="contactInfo"
              value={contactInfo}
              onChange={handleChange}
            />
          </label>

          <button className="button" type="submit">
            ADD AIRPORT
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
