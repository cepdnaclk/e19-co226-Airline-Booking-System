import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Display.css";

export const Display = () => {
  const [flightData, setFlightData] = useState([
    // Flight data array...
  ]);

  const [airportData, setAirportData] = useState([
    // Airport data array...
  ]);

  const [editingFlightId, setEditingFlightId] = useState(null);
  const [editingAirportCode, setEditingAirportCode] = useState(null);

  const handleFlightUpdate = (flightId) => {
    setEditingFlightId(flightId);
  };

  const handleFlightDelete = (flightId) => {
    // Implement flight data deletion logic
  };

  const handleAirportUpdate = (airportCode) => {
    setEditingAirportCode(airportCode);
  };

  const handleAirportDelete = (airportCode) => {
    // Implement airport data deletion logic
  };

  const handleFlightFieldChange = (event, field, flightId) => {
    const updatedFlightData = flightData.map((flight) => {
      if (flight.flightId === flightId) {
        return { ...flight, [field]: event.target.value };
      }
      return flight;
    });
    setFlightData(updatedFlightData);
  };

  const handleAirportFieldChange = (event, field, airportCode) => {
    const updatedAirportData = airportData.map((airport) => {
      if (airport.airportCode === airportCode) {
        return { ...airport, [field]: event.target.value };
      }
      return airport;
    });
    setAirportData(updatedAirportData);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="h2">FLIGHT DETAILS</h2>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">FLIGHT ID</th>
              <th className="th">AIRPORT CODE</th>
              <th className="th">FLIGHT STATUS</th>
              <th className="th">TOTAL NUM OF SEAT</th>
              <th className="th">BOOKED SEAT</th>
              <th className="th">ARRIVAL TIME</th>
              <th className="th">DEPARTURE TIME</th>
              <th className="th">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {flightData.map((flight) => (
              <tr className="tr" key={flight.flightId}>
                <td className="td">{flight.flightId}</td>
                <td className="td">
                  {editingFlightId === flight.flightId ? (
                    <input
                      type="text"
                      value={flight.airportCode}
                      onChange={(e) => handleFlightFieldChange(e, "airportCode", flight.flightId)}
                    />
                  ) : (
                    flight.airportCode
                  )}
                </td>
                <td className="td">{flight.flightStatus}</td>
                <td className="td">{flight.totalNumOfSeat}</td>
                <td className="td">{flight.bookedSeat}</td>
                <td className="td">{flight.arrivalTime}</td>
                <td className="td">{flight.departureTime}</td>
                <td className="button-container">
                  {editingFlightId === flight.flightId ? (
                    <>
                      <button onClick={() => setEditingFlightId(null)}>SAVE</button>
                      <button onClick={() => setEditingFlightId(null)}>CANCEL</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleFlightUpdate(flight.flightId)}>UPDATE</button>
                      <button onClick={() => handleFlightDelete(flight.flightId)}>DELETE</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="h2">AIRPORT DETAILS</h2>
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th">AIRPORT CODE</th>
              <th className="th">NAME</th>
              <th className="th">CITY</th>
              <th className="th">COUNTRY</th>
              <th className="th">CONTACT INFO</th>
              <th className="th">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {airportData.map((airport) => (
              <tr className="tr" key={airport.airportCode}>
                <td className="td">
                  {editingAirportCode === airport.airportCode ? (
                    <input
                      type="text"
                      value={airport.airportCode}
                      onChange={(e) => handleAirportFieldChange(e, "airportCode", airport.airportCode)}
                    />
                  ) : (
                    airport.airportCode
                  )}
                </td>
                <td className="td">
                  {editingAirportCode === airport.airportCode ? (
                    <input
                      type="text"
                      value={airport.name}
                      onChange={(e) => handleAirportFieldChange(e, "name", airport.airportCode)}
                    />
                  ) : (
                    airport.name
                  )}
                </td>
                {/* Render other fields similarly */}
                <td className="button-container1">
                  {editingAirportCode === airport.airportCode ? (
                    <>
                      <button onClick={() => setEditingAirportCode(null)}>SAVE</button>
                      <button onClick={() => setEditingAirportCode(null)}>CANCEL</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleAirportUpdate(airport.airportCode)}>UPDATE</button>
                      <button onClick={() => handleAirportDelete(airport.airportCode)}>DELETE</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
