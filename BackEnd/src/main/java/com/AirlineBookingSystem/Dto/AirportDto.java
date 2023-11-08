package com.AirlineBookingSystem.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AirportDto {

    private Integer airportCode;
    private String  name;
    private String  city;
    private String  country;
    private String  contactInfo;
}
