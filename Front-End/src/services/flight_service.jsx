import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/flight";

// Adds a flight by making a POST request to the API
const addFlight = (
  flightId,
  airportCode,
  flightStatus,
  totalNumOfSeat,
  bookedSeat,
  arrivalTime,
  departureTime,
  flightDate,
  departureCountry // Include flightDate and departureCountry
) => {
  return axios
    .post(API_URL + "/saveFlight", {
      flightId,
      airportCode,
      flightStatus,
      totalNumOfSeat,
      bookedSeat,
      arrivalTime,
      departureTime,
      flightDate, // Include flightDate in the request
      departureCountry // Include departureCountry in the request
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

// Updates a flight by making a PUT request to the API
const updateFlight = (
  flightId,
  airportCode,
  flightStatus,
  totalNumOfSeat,
  bookedSeat,
  arrivalTime,
  departureTime,
  flightDate,
  departureCountry // Include flightDate and departureCountry
) => {
  return axios
    .put(API_URL + `/updateFlight/${flightId}`, {
      airportCode,
      flightStatus,
      totalNumOfSeat,
      bookedSeat,
      arrivalTime,
      departureTime,
      flightDate, // Include flightDate in the request
      departureCountry // Include departureCountry in the request
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

// Deletes a flight by making a DELETE request to the API
const deleteFlight = (flightId) => {
  return axios.delete(API_URL + `/deleteFlight/${flightId}`).then((response) => {
    console.log(response);
    return response.data;
  });
};

// Gets all flights from the API
const getAllFlights = () => {
  return axios.get(API_URL + "/getAllFlight").then((response) => {
    console.log(response);
    return response.data;
  });
};

const FlightService = {
  addFlight,
  updateFlight,
  deleteFlight,
  getAllFlights,
};

export default FlightService;
