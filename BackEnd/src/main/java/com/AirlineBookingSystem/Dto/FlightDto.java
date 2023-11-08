package com.AirlineBookingSystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightDto {
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
