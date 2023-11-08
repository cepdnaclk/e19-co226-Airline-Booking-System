package com.AirlineBookingSystem.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class FlightModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer flightId;
    private Integer airportCode;
    private String flightStatus;
    private String totalNumOfSeat;
    private String bookedSeat;
    private String arrivalTime;
    private String departureTime;
    private LocalDate flightDate;
    private String departureCountry;




}
