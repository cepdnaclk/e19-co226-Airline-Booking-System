package com.AirlineBookingSystem.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PassengerModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer passengerId;
    private String passportNumber;
    private String firstName;
    private String middleName;
    private String lastName;
    private String contactInfo;

}
