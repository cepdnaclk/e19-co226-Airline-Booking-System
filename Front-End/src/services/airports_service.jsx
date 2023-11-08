import axios from "axios";

const BASE_URL = "http://localhost:8080"; // Replace this with your actual backend API URL

const addAirport = async (airportCode, name, city, country, contactInfo, bookingDate) => {
  const payload = {
    airportCode,
    name,
    city,
    country,
    contactInfo,
    bookingDate,
  };

  try {
    const response = await axios.post(`${BASE_URL}/api/v1/flight/saveFlight`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchAvailableFlights = async (departureCountry, flightDate) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/flight/getFlightsByDepartureCountryAndDate?departureCountry=${departureCountry}&flightDate=${flightDate}`
    );
    return response.data.content; // Assuming the API response contains an array of flights
  } catch (error) {
    throw error;
  }
};



const auth = {
  addAirport, 
  fetchAvailableFlights,
};

export default auth;

