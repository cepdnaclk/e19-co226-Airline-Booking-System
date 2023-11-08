import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/airport";

// Registers a user by making a POST request to the API
const addAirport = (airportCode, name, city, country, contactInfo) => {
  return axios
    .post(API_URL + "/saveAirport", {
      airportCode,
      name,
      city,
      country,
      contactInfo,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

// Updates an airport by making a PUT request to the API
const updateAirport = (airportCode, name, city, country, contactInfo) => {
  return axios
    .put(API_URL + `/updateAirport/${airportCode}`, {
      name,
      city,
      country,
      contactInfo,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

// Deletes an airport by making a DELETE request to the API
const deleteAirport = (airportCode) => {
  return axios.delete(API_URL + `/deleteAirport/${airportCode}`).then((response) => {
    console.log(response);
    return response.data;
  });
};

// Gets all airports from the API
const getAllAirports = () => {
  return axios.get(API_URL + "/getAllAirport").then((response) => {
    console.log(response);
    return response.data;
  });
};

const auth = {
  addAirport,
  updateAirport,
  deleteAirport,
  getAllAirports,
};

export default auth;
