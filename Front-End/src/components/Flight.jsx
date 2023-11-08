import React, { useState, useEffect } from "react";
import FlightService from "../services/flight_service";
import { Footer } from "./Footer";
import "./Flight.css"; // Import the CSS file
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

const countriesList = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
  "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the",
  "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
  "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];
export const Flight = () => {
  const [flightId, setFlightId] = useState("");
  const [airportCode, setAirportCode] = useState("");
  const [flightStatus, setFlightStatus] = useState("");
  const [totalNumOfSeat, setTotalNumOfSeat] = useState("");
  const [bookedSeat, setBookedSeat] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setdepartureTime] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [departureCountry, setDepartureCountry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await FlightService.addFlight(
        flightId,
        airportCode,
        flightStatus,
        totalNumOfSeat,
        bookedSeat,
        arrivalTime,
        departureTime,
        flightDate,
        departureCountry
      ).then(
        (response) => {
          console.log("Flight Added", response);
          navigate("/flight");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            FLIGHT ID:
            <input
              className="input"
              type="number"
              name="flightId"
              onChange={(input) => setFlightId(input.target.value)}
            />
          </label>

          <label className="label">
            AIRPORT CODE:
            <input
              className="input"
              type="number"
              name="airportCode"
              onChange={(input) => setAirportCode(input.target.value)}
            />
          </label>

          <label className="label">
            FLIGHT STATUS:
            <input
              className="input"
              type="text"
              name="flightStatus"
              onChange={(input) => setFlightStatus(input.target.value)}
            />
          </label>

          <label className="label">
            TOTAL NUMBER OF SEAT:
            <input
              className="input"
              type="text"
              name="totalNumOfSeat"
              onChange={(input) => setTotalNumOfSeat(input.target.value)}
            />
          </label>

          <label className="label">
            BOOKED SEAT:
            <input
              className="input"
              type="text"
              name="bookedSeat"
              onChange={(input) => setBookedSeat(input.target.value)}
            />
          </label>

          <label className="label">
            ARRIVAL TIME:
            <input
              className="input"
              type="text"
              name="arrivalTime"
              onChange={(input) => setArrivalTime(input.target.value)}
            />
          </label>

          <label className="label">
            DEPARTURE TIME:
            <input
              className="input"
              type="text"
              name="departureTime"
              onChange={(input) => setdepartureTime(input.target.value)}
            />
          </label>

          <label className="label">
            FLIGHT DATE:
            <input
              className="input"
              type="date"
              name="flightDate"
              onChange={(input) => setFlightDate(input.target.value)}
            />
          </label>

          <label className="label">
            DEPARTURE COUNTRY:
            <select
              className="input"
              name="departureCountry"
              value={departureCountry}
              onChange={(input) => setDepartureCountry(input.target.value)}
            >
              <option value="">Select a country</option>
              {countriesList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
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
