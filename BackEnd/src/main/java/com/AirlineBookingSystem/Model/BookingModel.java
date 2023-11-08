package com.AirlineBookingSystem.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class BookingModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int flightId;
    private String flightStatus;
    private Integer seatNumber;
    private String paymentInfo;
    private String fareClass;
    private Long passengerId;
    private Long reservationId;
    private Long selectedPromotion;
    private String email;


    // Other booking-related getters/setters
}
