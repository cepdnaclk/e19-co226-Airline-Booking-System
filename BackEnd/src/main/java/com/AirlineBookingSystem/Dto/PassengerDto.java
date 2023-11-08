package com.AirlineBookingSystem.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PassengerDto {

    private Integer passengerId;
    private String passportNumber;
    private String firstName;
    private String middleName;
    private String lastName;
    private String contactInfo;
}
