import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./AdminHome.css";

export const AdminHome = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "AIRPORT ENTITY",
      description:
        "The airport entity represents an airport with the following attributes:\n\nairportCode (Integer): It is a unique identifier or code assigned to the airport. This code can be an integer value and is typically used for identification and reference purposes within a system or database.\nname (String): It represents the official name or title of the airport. The name is a string value that helps identify the specific airport among others.\ncity (String): It denotes the city where the airport is located. This attribute specifies the city's name as a string value, providing information about the airport's geographical location.\ncountry (String): It signifies the country in which the airport is situated. This attribute holds the name of the country as a string value, indicating the nation associated with the airport.\ncontactInfo (String): It stores the contact information or details related to the airport. This can include various means of communication, such as phone numbers, email addresses, or physical addresses, that allow individuals or organizations to contact the airport for inquiries or assistance.\n\nThese attributes provide essential information about the airport entity, including its code, name, location (city and country), and contact information. They serve as the foundational data for managing and representing airports within a system or application.",
    },
    { id: 2, title: "CARD 2", description: "Description for Card 2" },
   
  ]);

  return (
    <div>
      <Header />

      <div className="card-container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
