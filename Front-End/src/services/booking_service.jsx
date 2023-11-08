// booking_service.jsx

const BASE_URL = "http://localhost:8080/api/v1/booking/saveBooking"; // Replace this with the appropriate base URL for your backend API

const addBooking = async (bookingData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error saving booking");
    }
  } catch (error) {
    throw new Error("Error saving booking: " + error.message);
  }
};

const auth = {
  addBooking
 
};

export default auth;


