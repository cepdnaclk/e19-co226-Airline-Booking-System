import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const centeredSectionStyle = {
  textAlign: "center",
  margin: "50px 0",
  padding: "20px",
  backgroundColor: "#f7f7f7",
  
};

export const About = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Nav />

      <div style={centeredSectionStyle}>
        <h1>About AirLuxe Airline Booking Systems</h1>
        <p>
          Welcome to AirLuxe, your premier destination for seamless and luxurious airline booking experiences. At AirLuxe, we understand that travel is not just a journey; it's an expression of your aspirations, a testament to your taste, and a reflection of your individuality. That's why we've crafted a sophisticated and user-centric airline booking platform that caters to your every travel need.
        </p>
      </div>

      <div style={centeredSectionStyle}>
        <h2>Our Mission</h2>
        <p>
          Our mission at AirLuxe is to redefine the way you experience airline travel. We strive to elevate your journey from the moment you decide to explore the world. We're committed to providing a personalized, efficient, and exquisite booking process that ensures your travel plans are as exceptional as your destination.
        </p>
      </div>


      <div style={centeredSectionStyle}>
        <h2>Why Choose AirLuxe?</h2>
        <p>
          <strong>Luxury at Your Fingertips:</strong> AirLuxe brings the world's most opulent airlines and destinations to your screen, making luxury travel accessible and convenient. We curate a selection of premium airlines and routes, allowing you to indulge in sophistication and elegance.
        </p>
        <p>
          <strong>Seamless Booking: </strong> Our state-of-the-art booking system ensures a seamless and hassle-free experience. From choosing your flight to securing your seat, AirLuxe's intuitive interface guides you through the process with ease.
        </p>
        <p>
          <strong>Personalized Experiences: </strong> We believe that every traveler is unique. AirLuxe tailors your journey to your preferences, whether it's seat preferences, dietary requirements, or special accommodations. Your satisfaction is our priority.
        </p>
        <p>
          <strong>Exceptional Customer Support: </strong> Our dedicated customer support team is available around the clock to assist you. Whether you have a query about your booking, need to make changes, or require assistance during your travel, we're here to help.
        </p>
        <p>
          <strong>Global Connectivity:</strong> AirLuxe covers a vast network of destinations, connecting you to the world's most sought-after cities and hidden gems. Wherever your wanderlust takes you, we're there to ensure your voyage is unforgettable.
        </p>
      </div>

      <div style={centeredSectionStyle}>
        <h2>Our Commitment to Excellence</h2>
        <p>
        AirLuxe is more than just an airline booking platform; it's a commitment to excellence in travel. We constantly strive to enhance your experience by integrating the latest technology, staying ahead of industry trends, and maintaining a passion for delivering the utmost quality.        </p>
      </div>

      <div style={centeredSectionStyle}>
        <h2>Join the AirLuxe Experience</h2>
        <p>
        Embark on a journey that transcends the ordinary and embraces the extraordinary. Discover the art of travel with AirLuxe and turn your dreams into reality. Let us be your companion in creating moments, memories, and stories that last a lifetime.
        <p>
        Fly luxuriously. Fly elegantly. Fly with AirLuxe.      
        </p>
        <p>
        Contact Us:
        </p>
        <p>
        Email: info@airluxebookings.com </p>
        <p>
        Phone: 1-800-123-4567  </p>
        <p>
        Follow us on social media: @AirLuxeBookings
        </p>
        </p>
        </div>
       
      <Footer />
    </div>
  );
};
