import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import auth from "../services/auth.service";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "./myBookingStyles.css";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import html2pdf from 'html2pdf.js';

export const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = await auth.getCurrentUser();

      const userEmail = getUserEmailFromToken(currentUser.access_token);
      setUserEmail(userEmail); // Store the email in state
      fetchBookingsByEmail(userEmail);
      console.log(getUserEmailFromToken(currentUser.access_token));
    };

    fetchUserData();
  }, []);

  const fetchBookingsByEmail = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/booking/getBookingsByEmail?email=${email}`
      );
      setBookings(response.data.content);
    } catch (error) {
      console.log("Error fetching bookings:", error);
    }
  };

  const getUserEmailFromToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      return decodedToken.sub;
    } catch (error) {
      console.log("Error decoding token:", error);
      return null;
    }
  };

  const handleDownloadPDF = () => {
    const content = document.getElementById("bookings-content");
    const opt = {
      margin:       0.3,
      filename:     'my_bookings.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(content).set(opt).save();
  };

  return (
    <div className="my-booking-container">
      <Nav /> 
      <div className="containers">
        <div className="bookings-list" id="bookings-content">
          <h2 className="h2">My Bookings</h2>
    
          {bookings.length === 0 ? (
            <p className="loading">No Booking Available</p>
          ) : (
            <ul>
              {bookings.map((booking) => (
                <li key={booking.id} className="booking-item">
                  <Text>Email : {userEmail}</Text>
                  <br/>
                  <Text>Flight ID: {booking.flightId}</Text>
                  <br/>
                  <Text>Seat Number: {booking.seatNumber}</Text>
                  <br/>
                  <Text>Payment Info: {booking.paymentInfo}</Text>
                  <br/>
                  <Text>Fare Class: {booking.fareClass}</Text>
                  <br/>
                  <Text>Passenger Id: {booking.passengerId}</Text>
                  <br/>
                  <Text>Reservation Id: {booking.reservationId}</Text>
                  <br/>
                  <Text>Selected Promotion: {booking.selectedPromotion}</Text>
                  
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="download-btn">
          <PDFDownloadLink document={<MyPdfDocument bookings={bookings} userEmail={userEmail} />} fileName="my_bookings.pdf">
            {({ blob, url, loading, error }) =>
              loading ? '' : ''
            }
          </PDFDownloadLink>
          <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

const MyPdfDocument = ({ bookings, userEmail }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>My Bookings</Text>
        <Text>Email: {userEmail}</Text>
        {bookings.map((booking) => (
          <View key={booking.id} style={styles.bookingContainer}>
            <Text style={styles.bookingHeading}>Booking ID: {booking.id}</Text>
            <Text style={styles.text}>Flight ID: {booking.flightId}</Text>
            <Text style={styles.text}>Seat Number: {booking.seatNumber}</Text>
            <Text style={styles.text}>Payment Info: {booking.paymentInfo}</Text>
            <Text style={styles.text}>Fare Class: {booking.fareClass}</Text>
            <Text style={styles.text}>Passenger Id: {booking.passengerId}</Text>
            <Text style={styles.text}>Reservation Id: {booking.reservationId}</Text>
            <Text style={styles.text}>Selected Promotion: {booking.selectedPromotion}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  heading: {
    fontSize: 24,
    marginBottom: 10
  },
  bookingContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  bookingHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "#8B0000",
    fontSize: 14,
  },
});

