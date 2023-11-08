import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import "./Booking.css"; // Import the CSS file
import { Nav } from "./Nav";
import auth from "../services/airports_service";
import { useNavigate, useLocation } from 'react-router-dom';

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

export const Booking = () => {
  const [country, setCountry] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // Add successMessage state

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const fetchedFlights = await auth.fetchAvailableFlights();
      setFlights(fetchedFlights);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "country":
        setCountry(value);
        break;
      case "bookingDate":
        setBookingDate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchedFlights = await auth.fetchAvailableFlights(
        country,
        bookingDate
      );
      setFlights(fetchedFlights);
      setSuccessMessage("Flights successfully fetched!");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleBookNow = (flight) => {
    navigate("/bookingForm", { state: { flight } });
  };

  return (
    <div>
      <Nav />
      <div className="container">
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            COUNTRY:
            <select
              className="input"
              name="country"
              value={country}
              onChange={handleChange}
            >
              <option value="">Select a country</option>
              {countriesList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <label className="label">
            BOOKING DATE:
            <input
              className="input"
              type="date"
              name="bookingDate"
              value={bookingDate}
              onChange={handleChange}
            />
          </label>

          <button className="button" type="submit">
            SEARCH
          </button>
        </form>

        <div className="flights-container">
          {flights.length > 0 ? (
            <div>
              <h2>Available Flights</h2>
              <table>
                <thead>
                  <tr>
                    <th>Flight ID</th>
                    <th>Airport Code</th>
                    <th>Flight Status</th>
                    <th>Total Num Of Seat</th>
                    <th>Booked Seat</th>
                    <th>Arrival Time</th>
                    <th>Departure Time</th>
                    <th>Flight Date</th>
                    <th>Departure Country</th>
                    <th>Booking</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.map((flight) => (
                    <tr key={flight.flightId}>
                      <td>{flight.flightId}</td>
                      <td>{flight.airportCode}</td>
                      <td>{flight.flightStatus}</td>
                      <td>{flight.totalNumOfSeat}</td>
                      <td>{flight.bookedSeat}</td>
                      <td>{flight.arrivalTime}</td>
                      <td>{flight.departureTime}</td>
                      <td>{flight.flightDate}</td>
                      <td>{flight.departureCountry}</td>
                      <td>
                        <button
                          className="booking-button"
                          onClick={() => handleBookNow(flight)}
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No flights available for the selected criteria.</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
