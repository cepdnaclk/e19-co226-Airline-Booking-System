package com.AirlineBookingSystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookingDto {
    private int flightId;
    private String flightStatus;
    private Integer seatNumber;
    private String paymentInfo;
    private String fareClass;
    private Long passengerId;
    private Long reservationId;
    private Long selectedPromotion;
    private String email;


}
