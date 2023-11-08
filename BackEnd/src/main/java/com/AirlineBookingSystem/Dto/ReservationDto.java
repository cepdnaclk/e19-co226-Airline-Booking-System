package com.AirlineBookingSystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationDto {

    private Integer reservationId;
    private String flightNumber;
    private String bookingStatus;
    private Integer flightId;
    private Integer passengerId;
}
